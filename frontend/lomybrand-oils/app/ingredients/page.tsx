// app/ingredients/page.tsx
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from 'lucide-react'

export default function IngredientsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Our Ingredients</h1>

        <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
          <Image src="/assets/ingredients.jpg" alt="Organic Coconut Ingredients" fill className="object-cover" />
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-primary/10 p-6 rounded-xl mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">100% Organic Process</h2>
            <p className="text-lg leading-relaxed">
              Made in the 100% organic way from fresh coconuts in Watamu. No preservatives, no chemical additives, no artificial flavors and dyes.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Our Production Process</h2>

          <div className="grid gap-6 my-8">
            <div className="flex gap-4 items-start">
              <div className="bg-primary/10 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-bold text-primary">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Harvesting Fresh Coconuts</h3>
                <p className="text-muted-foreground">
                  We carefully select and harvest only the freshest, ripest coconuts from sustainable farms in Watamu, Kenya. Our coconuts are grown without the use of pesticides or harmful chemicals.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-primary/10 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-bold text-primary">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Cold-Pressing Process</h3>
                <p className="text-muted-foreground">
                  We use a traditional cold-pressing method to extract the oil from fresh coconut meat. This gentle process ensures that all the natural nutrients, enzymes, and beneficial compounds remain intact.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-primary/10 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-bold text-primary">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Natural Filtration</h3>
                <p className="text-muted-foreground">
                  Our oil is filtered naturally without the use of chemicals or bleaching agents. This minimal processing preserves the oil's natural aroma, flavor, and nutritional properties.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-primary/10 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-bold text-primary">4</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Eco-Friendly Packaging</h3>
                <p className="text-muted-foreground">
                  We package our coconut oil in environmentally friendly containers that protect the oil from light and air, ensuring maximum freshness and shelf life without the need for preservatives.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">What's NOT in Our Products</h2>

          <div className="grid sm:grid-cols-2 gap-4 my-8">
            <div className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 mt-1" />
              <p>No Preservatives</p>
            </div>
            <div className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 mt-1" />
              <p>No Chemical Additives</p>
            </div>
            <div className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 mt-1" />
              <p>No Artificial Flavors</p>
            </div>
            <div className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 mt-1" />
              <p>No Artificial Dyes</p>
            </div>
            <div className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 mt-1" />
              <p>No Refined Sugars</p>
            </div>
            <div className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 mt-1" />
              <p>No GMO Ingredients</p>
            </div>
          </div>

          <div className="bg-muted rounded-xl p-6 my-8">
            <h3 className="text-xl font-semibold mb-2">Experience Pure, Natural Goodness</h3>
            <p className="mb-4">
              Our commitment to purity and quality means you get coconut oil exactly as nature intended. Try our products today and feel the difference that truly organic coconut oil can make.
            </p>
            <Button asChild>
              <Link href="/shop">
                Shop Our Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}