"use client"

import Image from "next/image"
import Link from "next/link"
import { useWishlist } from "@/hooks/use-wishlist"
import { useCart } from "@/hooks/use-cart"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart, Trash2 } from "lucide-react"
import { toast } from "@/hooks/use-toast"
import type { Product } from "@/types/product"

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist()
  const { addToCart } = useCart()

  const handleAddToCart = (product: Product) => {
    addToCart({ ...product, quantity: 1 })
    toast({
      title: "Added to cart",
      content: `${product.name} has been added to your cart.`,
    })
  }

  if (wishlist.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <Heart className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          <h1 className="text-2xl font-bold mb-2">Your wishlist is empty</h1>
          <p className="text-muted-foreground mb-8">Save items you love to your wishlist and find them here anytime.</p>
          <Button asChild>
            <Link href="/shop">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Your Wishlist</h1>
        <Button variant="outline" onClick={clearWishlist}>
          Clear Wishlist
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {wishlist.map((product) => (
          <div key={product.id} className="group relative border rounded-lg overflow-hidden flex flex-col">
            <div className="relative aspect-square bg-muted">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => removeFromWishlist(product.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>

            <div className="p-4 flex-1 flex flex-col">
              <Link href={`/product/${product.id}`} className="font-medium hover:underline">
                {product.name}
              </Link>
              <p className="text-sm text-muted-foreground mb-2">{product.quantity}</p>
              <p className="font-semibold mb-4">Ksh {product.price.toLocaleString()}</p>

              <Button className="mt-auto" onClick={() => handleAddToCart({ ...product, description: "", category: "", quantity: 1 })}>
                <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
