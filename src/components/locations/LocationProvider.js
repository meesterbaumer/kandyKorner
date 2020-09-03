import React, { useState } from "react"

export const LocationContext = React.createContext()

export const LocationProvider = (props) => {
  const [locations, setLocations] = useState([])

  const getLocations = () => {
    return fetch("http://localhost:8088/locations")
    .then(res => res.json())
    .then(setLocations)
  }

  const addLocations = location => {
    return fetch("http://localhost:8088/locations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(location)
    })
    .then(getLocations)
  }

  return (
    <LocationContext.Provider value={{
      locations, getLocations, addLocations
    }}>
      {props.children}
    </LocationContext.Provider>
  )
}