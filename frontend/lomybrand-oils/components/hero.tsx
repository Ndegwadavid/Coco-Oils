import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative">
      <div className="grid lg:grid-cols-2 gap-8 items-center py-8 lg:py-16">
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Pure Coconut Oil <br />
            <span className="text-primary">For Your Wellbeing</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-md">
            Discover the natural benefits of our premium coconut oil products for your skin, hair, and health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild size="lg">
              <Link href="/shop">
                Shop Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
        <div className="relative aspect-square lg:aspect-auto lg:h-[500px] rounded-xl overflow-hidden">
          <Image src="/assets/hero.jpg" alt="Lomy Brands Coconut Oil Products" fill className="object-cover" priority />
        </div>
      </div>
    </section>
  )
}
