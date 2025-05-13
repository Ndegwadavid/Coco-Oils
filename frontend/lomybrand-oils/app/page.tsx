// app/page.tsx
import ProductList from "@/components/product-list"
import Hero from "@/components/hero"
import Benefits from "@/components/benefits"
import FeaturedSection from "@/components/featured-section"
import { products } from "@/data/products"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Hero />
      <div className="my-16">
        <FeaturedSection />
      </div>
      <section className="my-16">
        <h2 className="text-3xl font-bold mb-6 text-center">
          <span className="relative inline-block">
            <span className="relative z-10">Featured Products</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-primary/20 -rotate-1"></span>
          </span>
        </h2>
        <ProductList products={products.slice(0, 4)} />
      </section>
      <Benefits />
    </main>
  )
}