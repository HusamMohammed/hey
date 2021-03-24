import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation } from "swiper"

import ServiceCard from "./Services.Card"
import { LeftArrow, RightArrow } from "../shared/Arrow"

SwiperCore.use([Navigation])

const ServicesSlider2 = ({ services }) => {
  const [hasMounted, setHasMounted] = React.useState(false)

  React.useEffect(() => {
    setHasMounted(!hasMounted)
    console.log("Mounted")
  }, [])

  return (
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
      {services.map((service, index) => {
        return (
          <SwiperSlide key={index}>
            <ServiceCard service={service} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default ServicesSlider2
