import React from "react"
import "./Location.css"

export const Location = ({location}) => (
  <section className="location">
    <h3 className="location__name">{location.name}</h3>
    <address className="location)__address">{location.address}</address>
    <div className="location__sqft">{location.sqft} sq. FT</div>
    <div className="location__handicap">{location.handicap}</div>
  </section>
)