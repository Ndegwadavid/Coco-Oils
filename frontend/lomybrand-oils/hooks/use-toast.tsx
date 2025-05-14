"use client"

import * as React from "react"
import type { ToastActionElement, ToastProps } from "@/components/ui/toast"

const TOAST_LIMIT = 5
const TOAST_REMOVE_DELAY = 5000

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_VALUE
  return count.toString()
}

type ActionType = typeof actionTypes

type Action =
  | {
      type: ActionType["ADD_TOAST"]
      toast: ToasterToast
    }
  | {
      type: ActionType["UPDATE_TOAST"]
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType["DISMISS_TOAST"]
      toastId?: string
    }
  | {
      type: ActionType["REMOVE_TOAST"]
      toastId?: string
    }

interface State {
  toasts: ToasterToast[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case actionTypes.ADD_TOAST:
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case actionTypes.UPDATE_TOAST:
      return {
        ...state,
        toasts: state.toasts.map((t) => (t.id === action.toast.id ? { ...t, ...action.toast } : t)),
      }

    case actionTypes.DISMISS_TOAST: {
      const { toastId } = action
      if (toastId) {
        clearTimeout(toastTimeouts.get(toastId))
        toastTimeouts.delete(toastId)
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t,
        ),
      }
    }
    case actionTypes.REMOVE_TOAST: {
      const { toastId } = action
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== toastId),
      }
    }
  }
}

// Create a context for the toast
interface ToastContextValue {
  toasts: ToasterToast[]
  toast: (props: ToastProps) => void
  dismiss: (toastId?: string) => void
  remove: (toastId: string) => void
}

const ToastContext = React.createContext<ToastContextValue | undefined>(undefined)
ToastContext.displayName = "ToastContext"

// Create a global toast function
let toastFn: ((props: ToastProps) => void) | undefined

export function toast(props: ToastProps) {
  if (toastFn) {
    toastFn(props)
  } else {
    console.warn("Toast function not available. Make sure ToastProvider is mounted.")
  }
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(reducer, {
    toasts: [],
  })

  const toastFunction = React.useCallback((props: ToastProps) => {
    const id = genId()

    const newToast = {
      id,
      ...props,
      open: true,
    }

    dispatch({
      type: actionTypes.ADD_TOAST,
      toast: newToast,
    })

    toastTimeouts.set(
      id,
      setTimeout(() => {
        dispatch({
          type: actionTypes.DISMISS_TOAST,
          toastId: id,
        })
      }, TOAST_REMOVE_DELAY),
    )
  }, [])

  const dismiss = React.useCallback((toastId?: string) => {
    dispatch({
      type: actionTypes.DISMISS_TOAST,
      toastId,
    })
  }, [])

  const remove = React.useCallback((toastId: string) => {
    dispatch({
      type: actionTypes.REMOVE_TOAST,
      toastId,
    })
  }, [])

  // Set the global toast function
  React.useEffect(() => {
    toastFn = toastFunction
    return () => {
      toastFn = undefined
      state.toasts.forEach((t) => {
        const timeout = toastTimeouts.get(t.id)
        if (timeout) {
          clearTimeout(timeout)
        }
      })
    }
  }, [toastFunction, state.toasts])

  const value = {
    toasts: state.toasts,
    toast: toastFunction,
    dismiss,
    remove,
  }

  return React.createElement(
    ToastContext.Provider, 
    { value }, 
    children
  )
}

export function useToast() {
  const context = React.useContext(ToastContext)
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}