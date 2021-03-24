import React from "react"
import Slider from "react-slick"

import ProjectCard from "./Projects.Card"

const ProjectsSlider = ({ projects }) => {
  const [selec, setSelec] = React.useState(0)

  const settings = {
    infinite: true,

    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 4,
    arrows: true,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 990,
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
    beforeChange: (current, next) => {
      console.log(
        "This before Change",
        "\n",
        "Current Slide",
        current,
        "\n",
        "Next Slide",
        next
      )
    },
    afterChange: current => {
      console.log("This after Change", "\n", "Current Slide", current)
      //setSelec(current)
      // document.querySelector(".slick-current").style.background = "red"
    },
  }
  console.log(selec)
  return (
    <div
      data-sal="slide-up"
      data-sal-delay="300"
      data-sal-duration="400"
      data-sal-easing="ease-out"
    >
      <Slider {...settings}>
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </Slider>
    </div>
  )
}

export default ProjectsSlider
