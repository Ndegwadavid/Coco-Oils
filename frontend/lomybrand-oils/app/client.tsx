"use client"

import type React from "react"
import { Inter } from "next/font/google"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { CartProvider } from "@/hooks/use-cart"
import { WishlistProvider } from "@/hooks/use-wishlist"
import { ToastProvider } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <ToastProvider>
            <CartProvider>
              <WishlistProvider>
                <div className="flex min-h-screen flex-col">
                  <Navbar />
                  <main className="flex-1">{children}</main>
                  <Footer />
                </div>
                <Toaster />
              </WishlistProvider>
            </CartProvider>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
