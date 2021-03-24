import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Section, Wrapper, Item1, Item2, Title, Desc } from "./styles"

const About = () => {
  const {
    about: { title, description, image, background },
  } = useStaticQuery(graphql`
    {
      about: aboutJson {
        title
        description
        image {
          childImageSharp {
            gatsbyImageData(
              formats: [AUTO, WEBP, AVIF]
              quality: 85
              placeholder: BLURRED
            )
          }
        }
        background {
          childImageSharp {
            gatsbyImageData(
              formats: [AUTO, WEBP, AVIF]
              width: 1920
              quality: 20
              placeholder: BLURRED
            )
          }
        }
      }
    }
  `)

  const imageData = getImage(image)
  const backgroundData = getImage(background)

  return (
    <Section id="عن_نقطة">
      <Wrapper>
        <Item1>
          <Title
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-duration="400"
            data-sal-easing="ease-out"
          >
            {title}
          </Title>
          <Desc
            data-sal="slide-up"
            data-sal-delay="200"
            data-sal-duration="400"
            data-sal-easing="ease-out"
          >
            {description}
          </Desc>
        </Item1>
        <Item2
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-duration="400"
          data-sal-easing="ease-out"
        >
          <GatsbyImage image={imageData} alt=""></GatsbyImage>
        </Item2>
      </Wrapper>
      <GatsbyImage
        image={backgroundData}
        alt=""
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          opacity: 0.3,
          pointerEvents: "none",
        }}
      />
    </Section>
  )
}

export default About
