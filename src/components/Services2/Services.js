import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import ServicesSlider from "./Services.Slider2"

import Container from "../shared/Container"
import { Title, SubTitle } from "../shared/StyledComponents"
import { Section } from "./styles"

const Services = () => {
  const { services1, services2, subTitle } = useStaticQuery(graphql`
    {
      services1: allServices1Json {
        nodes {
          name
          description
          image {
            childImageSharp {
              gatsbyImageData(
                width: 200
                formats: [AUTO, WEBP, AVIF]
                quality: 85
                placeholder: BLURRED
              )
            }
          }
        }
      }
      services2: allServices2Json {
        nodes {
          name
          description
          image {
            childImageSharp {
              gatsbyImageData(
                width: 200
                formats: [AUTO, WEBP, AVIF]
                quality: 85
                placeholder: BLURRED
              )
            }
          }
        }
      }
      subTitle: subTitesJson {
        services
      }
    }
  `)
  return (
    <Section id="خدماتنا" className="services">
      <Container>
        <Title
          data-sal="slide-up"
          data-sal-delay="200"
          data-sal-duration="400"
          data-sal-easing="ease-out"
        >
          خدماتنا
        </Title>
        <SubTitle
          data-sal="slide-up"
          data-sal-delay="400"
          data-sal-duration="400"
          data-sal-easing="ease-out"
        >
          {subTitle.services}
        </SubTitle>
        <ServicesSlider services={services1.nodes} />
        <ServicesSlider services={services2.nodes} loop />
      </Container>
    </Section>
  )
}

export default Services
