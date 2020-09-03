import React from "react"
import "./Product.css"

export const Product = ({product}) => (
  <section className="product">
    <h3 className="product__name">{product.name}</h3>
    <div className="product__price">Price: ${product.price}</div>
    <div className="product__FK">Product FK = {product.productTypeId}</div>
  </section>
)