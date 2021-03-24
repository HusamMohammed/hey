import React from "react"
import Slider from "react-slick"

import ServiceCard from "./Services.Card"
import { LeftArrow, RightArrow } from "../shared/Arrow"

const ServicesSlider = ({ services, loop }) => {
  const settings = {
    infinite: Boolean(loop),
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,

    rtl: true,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  return (
    <div
      data-sal="slide-up"
      data-sal-delay="300"
      data-sal-duration="400"
      data-sal-easing="ease-out"
    >
      <Slider {...settings}>
        {services.map((service, index) => (
          <ServiceCard service={service} key={index} />
        ))}
      </Slider>
    </div>
  )
}

export default ServicesSlider
