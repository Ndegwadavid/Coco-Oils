// components/product-list.tsx
"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, ShoppingCart, ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import { useWishlist } from "@/hooks/use-wishlist"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  quantity: string
}

interface ProductListProps {
  products: Product[]
}

export default function ProductList({ products }: ProductListProps) {
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const { toast } = useToast()
  const [expandedProducts, setExpandedProducts] = useState<Record<string, boolean>>({})

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart({ ...product, quantity: 1 })
    toast({
      title: "Added to cart",
      content: `${product.name} has been added to your cart.`,
    })
  }

  const handleWishlist = (e: React.MouseEvent, product: Product) => {
    e.preventDefault()
    e.stopPropagation()

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

  const toggleProductExpand = (productId: string) => {
    setExpandedProducts(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }))
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="flex flex-col h-full overflow-hidden transition-all hover:shadow-md">
          <div className="relative aspect-square bg-muted">
            <Image
              src={product.image || "/assets/placeholder.jpg"}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              priority={products.indexOf(product) < 4}
              loading={products.indexOf(product) < 4 ? "eager" : "lazy"}
            />
            <div className="absolute top-2 right-2 z-10">
              <Button
                variant={isInWishlist(product.id) ? "default" : "secondary"}
                size="icon"
                className="h-8 w-8 rounded-full shadow-md"
                onClick={(e) => handleWishlist(e, product)}
              >
                <Heart className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <CardContent className="flex-1 p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium">{product.name}</h3>
              <span className="font-semibold">Ksh {product.price.toLocaleString()}</span>
            </div>
            
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block px-2 py-1 text-xs bg-muted rounded-full">{product.category}</span>
              <span className="text-sm text-muted-foreground">{product.quantity}</span>
            </div>
            
            <div className={`overflow-hidden transition-all duration-300 ${expandedProducts[product.id] ? 'max-h-40' : 'max-h-0'}`}>
              <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
            </div>
            
            <button 
              onClick={() => toggleProductExpand(product.id)}
              className="flex items-center text-sm text-primary mt-2 hover:underline"
            >
              {expandedProducts[product.id] ? (
                <>Hide details <ChevronUp className="ml-1 h-4 w-4" /></>
              ) : (
                <>View details <ChevronDown className="ml-1 h-4 w-4" /></>
              )}
            </button>
          </CardContent>
          
          <CardFooter className="p-4 pt-0">
            <Button 
              className="w-full" 
              onClick={(e) => handleAddToCart(e, product)}
            >
              <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}