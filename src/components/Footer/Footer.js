import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Container from "../shared/Container"
import FooterForm from "./Footer.Form"
import FooterContactInfo from "./Footer.ContactInfo"
import FooterNav from "./Footer.Nav"
import FooterLSC from "./Footer.LSC"
import FooterLinks from "./Footer.Links"
import FooterBottom from "./Footer.Bottom"

import { Divider } from "./styles"

const Footer = () => {
  const {
    contact: { background },
  } = useStaticQuery(graphql`
    {
      contact: contactJson {
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

  const image = getImage(background)

  return (
    <Wrapper>
      <Container>
        <FooterGrid>
          <FooterForm />
          <FooterContactInfo />
          <FooterNav />
          <FooterLSC />
          {/* <FooterLinks />
          <FooterLogo
          // data-sal="slide-upfooter"
          // data-sal-delay="500"
          // data-sal-duration="400"
          // data-sal-easing="ease-out"
          >
            <Logo />
          </FooterLogo> */}
        </FooterGrid>
        <Divider />
        <FooterBottom />
      </Container>
      <GatsbyImage
        image={image}
        alt=""
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          opacity: 0.01,
          pointerEvents: "none",
        }}
      />
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  position: relative;
  padding-top: 2rem;
  padding-bottom: 1rem;
  background-color: #7c1e67;

  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    padding-top: 3rem;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    padding-top: 5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    // padding-top: 17rem;
  }
`
const FooterGrid = styled.div`
  display: grid;
  gap: 2.5rem;
  margin-bottom: 3rem;

  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "form form"
      "contact nav"
      "lsc lsc";
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "form form contact nav"
      "lsc lsc lsc lsc";
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    gap: 3rem;
    grid-template-columns: 430px 1fr 1fr 1fr 230px;
    grid-template-areas: "form contact contact nav lsc";
    margin-bottom: 6rem;
  }
`

export default Footer
