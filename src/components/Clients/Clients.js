import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation, EffectCoverflow } from "swiper"

import Container from "../shared/Container"
import ClientSlide from "./Client"

import { Section, Title, LeftCircle } from "./styles"

SwiperCore.use([Navigation, EffectCoverflow])

const Clients = () => {
  const { clients } = useStaticQuery(graphql`
    {
      clients: allClientsJson(sort: { fields: image___base }) {
        nodes {
          name
          image {
            childImageSharp {
              gatsbyImageData(
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
    <Section id="عملاؤنا" className="clients">
      <Con>
        <Title
          data-sal="slide-up"
          data-sal-delay="200"
          data-sal-duration="400"
          data-sal-easing="ease-out"
        >
          عملاؤنا
        </Title>
        <ClientSwiper
          navigation
          loop
          speed={500}
          slidesPerView="auto"
          initialSlide={1}
          spaceBetween={0}
          effect="coverflow"
          centeredSlides
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 2,
            slideShadows: false,
          }}
          breakpoints={{
            400: {
              slidesPerView: 4,
            },
            640: {
              slidesPerView: "auto",
              spaceBetween: 0,
            },
          }}
          data-sal="slide-up"
          data-sal-delay="150"
          data-sal-duration="500"
          data-sal-easing="ease-out"
        >
          {clients.nodes.map((client, index) => (
            <SwiperSlide key={index}>
              <ClientSlide client={client} />
            </SwiperSlide>
          ))}
        </ClientSwiper>
      </Con>
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
          fill="#7c1e67"
        >
          <g>
            <path d="M-46 234.94C-110.89 234.94 -163.33 182.49 -163.33 117.61C-163.33 52.72 -110.89 0.27 -46 0.27C18.89 0.27 71.33 52.72 71.33 117.61C71.33 182.49 18.89 234.94 -46 234.94Z" />
          </g>
        </svg>
      </LeftCircle>
    </Section>
  )
}

const ClientSwiper = styled(Swiper)`
  height: 130px;

  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    height: 200px;
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    height: 300px;
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    height: 230px;
  }
`

const Con = styled(Container)`
  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    max-width: 700px;
  }
`

export default Clients
