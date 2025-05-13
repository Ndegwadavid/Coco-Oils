"use client"

// Copied from shadcn/ui toast component
import * as React from "react"

import type { ToastActionElement, ToastProps } from "@/components/ui/toast"

const TOAST_LIMIT = 5
const TOAST_REMOVE_DELAY = 1000000

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

function useToast() {
  const [state, dispatch] = React.useReducer(
    reducer,
    {
      toasts: [],
    }
  )

  const toast = React.useCallback(
    ({ ...props }: ToastProps) => {
      const id = genId()

      const entryNew = {
        id,
        ...props,
        open: true,
      }

      dispatch({
        type: actionTypes.ADD_TOAST,
        toast: entryNew,
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
    },
    [dispatch],
  )

  const dismiss = React.useCallback(
    (toastId?: string) => {
      dispatch({
        type: actionTypes.DISMISS_TOAST,
        toastId,
      })
    },
    [dispatch],
  )

  const remove = React.useCallback(
    (toastId: string) => {
      dispatch({
        type: actionTypes.REMOVE_TOAST,
        toastId,
      })
    },
    [dispatch],
  )

  React.useEffect(() => {
    return () => {
      state.toasts.forEach((toast) => {
        clearTimeout(toastTimeouts.get(toast.id))
      })
    }
  }, [state.toasts])

  return {
    ...state,
    toast,
    dismiss,
    remove,
  }
}

export { useToast, reducer }
