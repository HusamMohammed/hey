import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import {
  ServiceWrapper,
  ServiceTitle,
  ServiceImageWrapper,
  ServiceDesc,
} from "./styles"

const ServiceCard = ({ service }) => {
  const { name, description, image } = service

  const img = getImage(image)
  return (
    <ServiceWrapper className="service__card">
      <ServiceImageWrapper>
        <GatsbyImage image={img} alt={name} />
      </ServiceImageWrapper>
      <ServiceTitle>{name}</ServiceTitle>
      <ServiceDesc>{description}</ServiceDesc>
    </ServiceWrapper>
  )
}

export default ServiceCard
