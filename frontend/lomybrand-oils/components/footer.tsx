import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, Phone, MapPin, PhoneIcon as WhatsApp } from "lucide-react"

// Custom TikTok icon since it's not in Lucide
function CustomTiktokIcon(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-muted">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center mb-4">
              <div className="relative h-10 w-10 mr-2">
                <Image src="/assets/logo.png" alt="PureBliss Coco Logo" fill className="object-contain" />
              </div>
              <span className="font-bold text-xl">PureBliss Coco</span>
            </Link>
            <p className="text-muted-foreground mb-4">Premium coconut oil products for your skin, hair, and health.</p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com/PureBliss Coco"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link
                href="https://instagram.com/purebliss_coco"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link
                href="https://tiktok.com/@purebliss_coco"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <CustomTiktokIcon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="https://wa.me/254721144888" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <WhatsApp className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-muted-foreground hover:text-primary transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/ingredients" className="text-muted-foreground hover:text-primary transition-colors">
                  Ingredients
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-muted-foreground hover:text-primary transition-colors">
                  Cart
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="text-muted-foreground hover:text-primary transition-colors">
                  Wishlist
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="text-muted-foreground hover:text-primary transition-colors">
                  Skin Care
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-muted-foreground hover:text-primary transition-colors">
                  Hair Care
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-muted-foreground hover:text-primary transition-colors">
                  Cooking
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-muted-foreground hover:text-primary transition-colors">
                  Health Supplements
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-muted-foreground hover:text-primary transition-colors">
                  Gift Sets
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-muted-foreground" />
                <span className="text-muted-foreground">P.O. Box 00600, Ngara Road, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-muted-foreground" />
                <Link href="tel:+254721144888" className="text-muted-foreground hover:text-primary transition-colors">
                  +254 721 144 888
                </Link>
              </li>
              <li className="flex items-center">
                <WhatsApp className="h-5 w-5 mr-2 text-muted-foreground" />
                <Link
                  href="https://wa.me/254721144888"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  WhatsApp Channel: PureBliss Coco
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-muted-foreground" />
                <Link
                  href="mailto:pureblisscoco@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  pureblisscoco@gmail.com
                </Link>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 mr-2 text-muted-foreground"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
                <Link
                  href="https://www.lomybrandoils.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  www.lomybrandoils.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} PureBliss Coco. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
