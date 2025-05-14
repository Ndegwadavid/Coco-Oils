"use client"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/hooks/use-cart"
import { Button } from "@/components/ui/button"
import { Trash2, ShoppingBag, ArrowRight } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart()

  const subtotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)

  const handleCheckout = () => {
    // Format cart items for WhatsApp message
    const items = cart
      .map((item) => `${item.name} (${item.quantity}) - Ksh ${(item.price * item.quantity).toLocaleString()}`)
      .join("%0A")

    const message = `Hello Lomy Brands, I would like to order:%0A${items}%0A%0ATotal: Ksh ${subtotal.toLocaleString()}`

    // Redirect to WhatsApp with prefilled message
    window.open(`https://wa.me/254721144888?text=${message}`, "_blank")
  }

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <ShoppingBag className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
          <p className="text-muted-foreground mb-8">Looks like you haven&apos;t added any products to your cart yet.</p>
          <Button asChild>
            <Link href="/shop">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="rounded-lg border overflow-hidden">
            <div className="bg-muted px-6 py-4 hidden md:grid grid-cols-12 gap-4">
              <div className="col-span-6">
                <span className="font-medium">Product</span>
              </div>
              <div className="col-span-2 text-center">
                <span className="font-medium">Price</span>
              </div>
              <div className="col-span-2 text-center">
                <span className="font-medium">Quantity</span>
              </div>
              <div className="col-span-2 text-right">
                <span className="font-medium">Total</span>
              </div>
            </div>

            {cart.map((item) => (
              <div key={item.id} className="px-6 py-4 border-t first:border-t-0">
                <div className="md:grid md:grid-cols-12 md:gap-4 flex flex-col gap-4">
                  <div className="col-span-6 flex gap-4">
                    <div className="relative h-20 w-20 rounded overflow-hidden flex-shrink-0">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div>
                      <Link href={`/product/${item.id}`} className="font-medium hover:underline">
                        {item.name}
                      </Link>
                      <p className="text-sm text-muted-foreground">{item.quantity}</p>
                    </div>
                  </div>

                  <div className="col-span-2 flex items-center justify-between md:justify-center">
                    <span className="md:hidden font-medium">Price:</span>
                    <span>Ksh {item.price.toLocaleString()}</span>
                  </div>

                  <div className="col-span-2 flex items-center justify-between md:justify-center">
                    <span className="md:hidden font-medium">Quantity:</span>
                    <div className="flex items-center">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  <div className="col-span-2 flex items-center justify-between md:justify-end">
                    <span className="md:hidden font-medium">Total:</span>
                    <div className="flex items-center gap-2">
                      <span>Ksh {(item.price * item.quantity).toLocaleString()}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-destructive"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-end">
            <Button variant="outline" onClick={clearCart}>
              Clear Cart
            </Button>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="rounded-lg border p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>Ksh {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>

              <Separator />

              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>Ksh {subtotal.toLocaleString()}</span>
              </div>

              <Button className="w-full" size="lg" onClick={handleCheckout}>
                Checkout via WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <p className="text-sm text-muted-foreground text-center mt-2">
                Proceed to WhatsApp to complete your order
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
