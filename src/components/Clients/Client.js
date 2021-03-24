import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { ClientWrapper, ImageWrapper } from "./styles"

const Client = ({ client }) => {
  const { image, name } = client

  const img = getImage(image)

  return (
    <ClientWrapper>
      <ImageWrapper className="clients__img">
        <GatsbyImage image={img} alt={name} />
      </ImageWrapper>
    </ClientWrapper>
  )
}

export default Client
