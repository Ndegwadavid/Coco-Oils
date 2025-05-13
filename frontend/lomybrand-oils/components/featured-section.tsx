// components/featured-section.tsx
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Heart, Zap, Check } from 'lucide-react'

export default function FeaturedSection() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="order-2 md:order-1">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">100% Pure & Organic Coconut Oil</h2>
        <p className="text-muted-foreground mb-6">
          Our coconut oil is unrefined and minimally processed, made from fresh coconut meat. 
          It retains a strong coconut flavor and aroma, perfect for cooking, baking, and as a natural moisturizer.
        </p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-start">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">100% Natural</h3>
              <p className="text-sm text-muted-foreground">No chemicals or additives</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
              <Heart className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Skin-Friendly</h3>
              <p className="text-sm text-muted-foreground">Gentle on all skin types</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
              <Zap className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Versatile Use</h3>
              <p className="text-sm text-muted-foreground">Cooking, skincare & more</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
              <Check className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Kenyan Made</h3>
              <p className="text-sm text-muted-foreground">Locally sourced in Watamu</p>
            </div>
          </div>
        </div>
        <Button asChild>
          <Link href="/shop">
            Shop Now <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
      <div className="order-1 md:order-2 relative">
        <div className="relative aspect-square md:aspect-auto md:h-[400px] rounded-xl overflow-hidden">
          <Image 
            src="/assets/featured-coconut.jpg" 
            alt="Pure Coconut Oil" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg animate-bounce-slow hidden md:block">
          <p className="font-bold text-primary">100% Organic</p>
          <p className="text-sm">No Preservatives</p>
        </div>
      </div>
    </div>
  )
}