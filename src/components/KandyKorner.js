import React from "react"
import { LocationProvider } from "./locations/LocationProvider"
import { LocationList } from "./locations/LocationList";
import { ProductProvider } from "./Products/ProductProvider";
import { ProductList } from "./Products/ProductList";

export const KandyKorner = () => {
  return <>

    <h2>Kandy Korner</h2>

    <h3>Locations</h3>
    <div className="locations">
      <LocationProvider>
        <LocationList />
      </LocationProvider>
    </div>

    <h3>Products</h3>
    <div>
      <ProductProvider>
        <ProductList />
      </ProductProvider>
    </div>

  </>
}