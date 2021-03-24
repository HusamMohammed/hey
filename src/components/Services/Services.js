import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation } from "swiper"

import Container from "../shared/Container"
import ServiceCard from "./Service.Card"

import { Section, Title, RightCircle, LeftCircle } from "./styles"

SwiperCore.use([Navigation])

const Services = () => {
  const { services } = useStaticQuery(graphql`
    {
      services: allServicesJson {
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
        <ServicesSwiper
          navigation
          loop
          speed={900}
          slidesPerView={1.2}
          spaceBetween={0}
          breakpoints={{
            600: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          data-sal="slide-up"
          data-sal-delay="150"
          data-sal-duration="500"
          data-sal-easing="ease-out"
        >
          {services.nodes.map((service, index) => {
            return (
              <SwiperSlide key={index}>
                <ServiceCard service={service} />
              </SwiperSlide>
            )
          })}
        </ServicesSwiper>
      </Container>
      <RightCircle
        data-sal="slide-leftcircle"
        data-sal-delay="500"
        data-sal-duration="400"
        data-sal-easing="ease-out"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 53 235"
          width="53"
          height="235"
          fill="#f29309"
        >
          <g>
            <path d="M118 234.83C53.11 234.83 0.67 182.39 0.67 117.5C0.67 52.61 53.11 0.17 118 0.17C182.89 0.17 235.33 52.61 235.33 117.5C235.33 182.39 182.89 234.83 118 234.83Z" />{" "}
          </g>
        </svg>
      </RightCircle>
      <LeftCircle
        data-sal="slide-rightcircle"
        data-sal-delay="500"
        data-sal-duration="400"
        data-sal-easing="ease-out"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 72 235"
          width="65"
          height="235"
          fill="#1e99cf"
        >
          <g>
            <path d="M-46 234.94C-110.89 234.94 -163.33 182.49 -163.33 117.61C-163.33 52.72 -110.89 0.27 -46 0.27C18.89 0.27 71.33 52.72 71.33 117.61C71.33 182.49 18.89 234.94 -46 234.94Z" />
          </g>
        </svg>
      </LeftCircle>
    </Section>
  )
}

const ServicesSwiper = styled(Swiper)`
  padding-right: 3.5rem;

  padding-bottom: 3rem;
  height: 280px;

  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    margin-right: -0.5rem;
    padding-right: 3rem;
    height: 320px;
    padding-bottom: 5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    height: 350px;
    margin-right: 3rem;
    margin-left: 4rem;
    padding-left: 2rem;
    padding-right: 5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    height: 350px;
    margin-right: 8rem;
    margin-left: 4rem;
    padding-left: 2rem;
    padding-right: 4rem;
    /* width: 1180px;
    padding-right: 4rem; */
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.xl}) {
    margin-right: 13rem;
    margin-left: 7rem;
    padding-left: 2rem;
    padding-right: 4.5rem;
  }
`

export default Services
