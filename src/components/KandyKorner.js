import React from "react"
import { LocationProvider } from "./locations/LocationProvider"
import { LocationList } from "./locations/LocationList";

export const KandyKorner = () => {
  return <>

    <h2>Kandy Korner</h2>

    <h3>Locations</h3>
    <div className="locations">
      <LocationProvider>
        <LocationList />
      </LocationProvider>
    </div>

  </>
}