// app/about/page.tsx
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from 'lucide-react'

export default function AboutPage() {
  const benefits = [
    {
      title: "Moisturizes Skin",
      description: "Coconut oil is an excellent moisturizer for all skin types, especially dry skin.",
    },
    {
      title: "Hair Care",
      description: "Helps in healthy growth of hair and gives your hair a shiny quality.",
    },
    {
      title: "Improves Digestion",
      description:
        "The saturated fats in coconut oil have antimicrobial properties that help fight various bacteria, fungi, and parasites.",
    },
    {
      title: "Boosts Immunity",
      description: "Contains lauric acid, which is known to fight bacteria, viruses, and fungi.",
    },
    {
      title: "Weight Management",
      description:
        "The medium-chain triglycerides in coconut oil can increase energy expenditure compared to the same amount of calories from longer chain fats.",
    },
    {
      title: "Dental Health",
      description: "Oil pulling with coconut oil helps reduce plaque and fight gum disease.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Our Coconut Oil</h1>

        <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
          <Image src="/assets/coconut-benefits.jpg" alt="Coconut Oil Benefits" fill className="object-cover" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed">
            Our coconut oil is an <strong>unrefined and minimally processed</strong> form of coconut oil typically made from fresh coconut meat and not refined, bleached, or deodorized. It retains a strong coconut flavor and aroma, and is commonly used in cooking, baking, and as a moisturizer. Renowned for its nutritional profile and versatile applications, our coconut oil brings the pure essence of nature to your daily routine.
          </p>

          <p>
            At PureBliss Coco, we take pride in offering the highest quality, pure coconut oil products that harness all the natural benefits this amazing oil has to offer.
          </p>

          <p>
            Our coconut oil is cold-pressed from fresh, organic coconuts to preserve all the natural nutrients and beneficial properties. We never use chemicals or high-heat processes that can degrade the quality of the oil.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">The Benefits of Coconut Oil</h2>

          <div className="grid sm:grid-cols-2 gap-6 my-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <div className="mt-1 bg-primary/10 rounded-full p-1 h-fit">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Our Commitment to Quality</h2>

          <p>
            At PureBliss Coco, we are committed to providing you with the purest, highest quality coconut oil products. Our coconut oil is:
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>100% pure and natural</li>
            <li>Cold-pressed to preserve nutrients</li>
            <li>Free from chemicals and additives</li>
            <li>Sourced from sustainable farms</li>
            <li>Packaged in eco-friendly containers</li>
          </ul>

          <div className="bg-muted rounded-xl p-6 my-8">
            <h3 className="text-xl font-semibold mb-2">Experience the PureBliss Coco Difference</h3>
            <p className="mb-4">
              Discover why our customers love our premium coconut oil products. From skincare to cooking, our versatile coconut oil will become an essential part of your daily routine.
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