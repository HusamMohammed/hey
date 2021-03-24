import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { ServiceCard } from "./styles"

const ServicesCard = ({ service }) => {
  const { name, description, image } = service

  const img = getImage(image)
  return (
    <ServiceCard className="services__card">
      <ServiceCard.Image>
        <GatsbyImage
          image={img}
          alt={name}
          style={{ width: "100%", height: "100%" }}
        />
      </ServiceCard.Image>
      <ServiceCard.Title>{name}</ServiceCard.Title>
      <ServiceCard.Description>{description}</ServiceCard.Description>
    </ServiceCard>
  )
}

export default ServicesCard
