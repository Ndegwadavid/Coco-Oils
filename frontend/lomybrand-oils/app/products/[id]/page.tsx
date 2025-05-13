"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { products } from "@/data/products"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart, Check, ArrowLeft } from 'lucide-react'
import { useCart } from "@/hooks/use-cart"
import { useWishlist } from "@/hooks/use-wishlist"
import { useToast } from "@/hooks/use-toast" // Changed from import { toast }

export default function ProductPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const { toast } = useToast() // Get toast function from useToast hook
  const [quantity, setQuantity] = useState(1)

  const product = products.find((p) => p.id === params.id)

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Button onClick={() => router.push("/shop")}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Shop
        </Button>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity })
    toast({
      title: "Added to cart",
      content: `${product.name} has been added to your cart.`,
    })
  }

  const handleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id)
      toast({
        title: "Removed from wishlist",
        content: `${product.name} has been removed from your wishlist.`,
      })
    } else {
      addToWishlist(product)
      toast({
        title: "Added to wishlist",
        content: `${product.name} has been added to your wishlist.`,
      })
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" className="mb-8" onClick={() => router.push("/shop")}>
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Shop
      </Button>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        <div className="relative aspect-square overflow-hidden rounded-xl border bg-muted">
          <Image src={product.image || "/assets/placeholder.jpg"} alt={product.name} fill className="object-cover" />
        </div>

        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl font-semibold mt-2">Ksh {product.price.toLocaleString()}</p>
          <div className="mt-2 inline-block px-2 py-1 bg-muted text-muted-foreground text-sm rounded">
            {product.category}
          </div>
          <div className="mt-6 text-muted-foreground">{product.description}</div>

          <div className="mt-8 grid gap-4">
            <div className="flex items-center gap-2">
              <span className="font-medium">Quantity:</span>
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}>
                  +
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button className="flex-1" size="lg" onClick={handleAddToCart}>
                <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
              </Button>
              <Button variant={isInWishlist(product.id) ? "default" : "outline"} size="lg" onClick={handleWishlist}>
                {isInWishlist(product.id) ? (
                  <>
                    <Check className="mr-2 h-5 w-5" /> In Wishlist
                  </>
                ) : (
                  <>
                    <Heart className="mr-2 h-5 w-5" /> Add to Wishlist
                  </>
                )}
              </Button>
            </div>
          </div>

          <div className="mt-8 border-t pt-8">
            <h3 className="text-lg font-semibold mb-2">Product Details</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Size: {product.quantity}</li>
              <li>Category: {product.category}</li>
              <li>100% Pure Coconut Oil</li>
              <li>Made in Kenya</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}