import { Check } from "lucide-react"

export default function Benefits() {
  const benefits = [
    {
      title: "100% Pure & Natural",
      description: "Our coconut oil is cold-pressed and unrefined to preserve all natural nutrients.",
    },
    {
      title: "Multipurpose Use",
      description: "Perfect for cooking, skin care, hair care, and overall health improvement.",
    },
    {
      title: "Kenyan Made",
      description: "Proudly made in Kenya with locally sourced coconuts of the highest quality.",
    },
    {
      title: "Eco-Friendly",
      description: "Sustainable sourcing and eco-friendly packaging for a better planet.",
    },
  ]

  return (
    <section className="py-12 bg-muted/50 rounded-xl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Lomy Brands</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our premium coconut oil products are crafted with care to bring you the best nature has to offer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-background rounded-lg p-6 shadow-sm">
              <div className="bg-primary/10 rounded-full p-2 w-fit mb-4">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
