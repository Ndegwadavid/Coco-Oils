"use client"

import type React from "react"
import { ToastProvider as InternalToastProvider } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"

export function ToastProvider({ children }: { children: React.ReactNode }) {
  return (
    <InternalToastProvider>
      {children}
      <Toaster />
    </InternalToastProvider>
  )
}
