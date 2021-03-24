import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { ClientWrapper, ImageWrapper } from "./styles"

const Client = ({ client }) => {
  const { image, name } = client

  const img = getImage(image)

  return (
    <ImageWrapper>
      <GatsbyImage image={img} alt={name} style={{ maxWidth: "220px" }} />
    </ImageWrapper>
  )
}

export default Client
