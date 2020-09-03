import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import { Product } from "./Product"

export const ProductList = () => {
  const { products, getProducts } = useContext(ProductContext)

  useEffect(() => {
    getProducts()
  }, [])
  return (
    <article className="products">
      {
        products.map(prod => <Product key={prod.id} product={prod} />)
      }
    </article>
  )
}