import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Slider from "react-slick"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation } from "swiper"

import Container from "../shared/Container"
import { Title, SubTitle } from "../shared/StyledComponents"
import { LeftArrow, RightArrow } from "../shared/Arrow"
import { Section } from "./styles"

import ClientSlide from "./Client"

SwiperCore.use([Navigation])

const Clients = () => {
  const { clients, subTitle } = useStaticQuery(graphql`
    {
      clients: allClientsJson(sort: { fields: image___base }) {
        nodes {
          name
          image {
            childImageSharp {
              gatsbyImageData(
                formats: [AUTO, WEBP, AVIF]
                quality: 90
                placeholder: BLURRED
              )
            }
          }
        }
      }
      subTitle: subTitesJson {
        clients
      }
    }
  `)

  const [hasMounted, setHasMounted] = React.useState(false)

  React.useEffect(() => {
    setHasMounted(!hasMounted)
    console.log("Mounted")
  }, [])

  // const settings = {
  //   infinite: true,
  //   speed: 600,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   rtl: true,
  //   nextArrow: <RightArrow />,
  //   prevArrow: <LeftArrow />,
  //   responsive: [
  //     {
  //       breakpoint: 991,
  //       settings: {
  //         slidesToShow: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 550,
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  // }

  return (
    <Section id="عملاؤنا" className="clients">
      <Container>
        <Title
          data-sal="slide-up"
          data-sal-delay="200"
          data-sal-duration="400"
          data-sal-easing="ease-out"
        >
          عملاؤنا
        </Title>
        <SubTitle
          data-sal="slide-up"
          data-sal-delay="400"
          data-sal-duration="400"
          data-sal-easing="ease-out"
        >
          {subTitle.clients}
        </SubTitle>
        {/* <div
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-duration="400"
          data-sal-easing="ease-out"
        >
          <Slider {...settings}>
            {clients.nodes.map((client, index) => (
              <ClientSlide client={client} key={index} />
            ))}
          </Slider>
        </div> */}
        <Swiper
          navigation
          loop
          speed={900}
          slidesPerView={1}
          spaceBetween={0}
          breakpoints={{
            521: {
              slidesPerView: 2,
            },
            990: {
              slidesPerView: 3,
            },
          }}
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-duration="400"
          data-sal-easing="ease-out"
        >
          {clients.nodes.map((client, index) => {
            return (
              <SwiperSlide key={index}>
                <ClientSlide client={client} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </Container>
    </Section>
  )
}

export default Clients
