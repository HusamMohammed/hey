import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Logo = () => {
  return (
    <StaticImage
      src="../../../content/assets/logo.png"
      width={132}
      quality={100}
      formats={["PNG"]}
      placeholder="blurred"
      alt="logo"
    />
  )
}

export default Logo
