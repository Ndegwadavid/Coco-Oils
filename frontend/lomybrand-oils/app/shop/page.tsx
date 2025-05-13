// app/shop/page.tsx
"use client"

import { useState, useEffect } from "react"
import ProductList from "@/components/product-list"
import { products } from "@/data/products"
import { Filter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Pagination from "@/components/pagination"

export default function Shop() {
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedQuantity, setSelectedQuantity] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 8

  const categories = ["all", ...new Set(products.map((product) => product.category))]
  const quantities = ["all", ...new Set(products.map((product) => product.quantity))]

  useEffect(() => {
    let result = products

    if (selectedCategory !== "all") {
      result = result.filter((product) => product.category === selectedCategory)
    }

    if (selectedQuantity !== "all") {
      result = result.filter((product) => product.quantity === selectedQuantity)
    }

    setFilteredProducts(result)
    setCurrentPage(1) // Reset to first page when filters change
  }, [selectedCategory, selectedQuantity])

  // Get current products for pagination
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shop Our Products</h1>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5" />
          <span className="font-medium">Filter Products:</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedQuantity} onValueChange={setSelectedQuantity}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Quantity" />
            </SelectTrigger>
            <SelectContent>
              {quantities.map((quantity) => (
                <SelectItem key={quantity} value={quantity}>
                  {quantity === "all" ? "All Sizes" : quantity}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            variant="outline"
            onClick={() => {
              setSelectedCategory("all")
              setSelectedQuantity("all")
            }}
          >
            Reset Filters
          </Button>
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <>
          <ProductList products={currentProducts} />
          
          {totalPages > 1 && (
            <div className="mt-8">
              <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium mb-2">No products found</h3>
          <p className="text-muted-foreground">Try changing your filters to find products.</p>
        </div>
      )}
    </div>
  )
}