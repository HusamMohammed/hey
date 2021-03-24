import React from "react"
import AliceCarousel from "react-alice-carousel"

import { LeftArrow, RightArrow } from "../shared/Arrow"

import ProjectCard from "./Projects.Card"

const ProjectsSlider = ({ projects }) => {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const [hasMounted, setHasMounted] = React.useState(false)

  const slidePrev = () => setActiveIndex(activeIndex - 1)
  const slideNext = () => setActiveIndex(activeIndex + 1)
  const onSlideChanged = ({ item }) => setActiveIndex(item)
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
  }

  React.useEffect(() => {
    setHasMounted(!hasMounted)
    console.log("Mounted")
  }, [])

  // if (!hasMounted) {
  //   console.log("not mounted")
  //   return null
  // }

  return (
    <div
      data-sal="slide-up"
      data-sal-delay="300"
      data-sal-duration="400"
      data-sal-easing="ease-out"
    >
      <AliceCarousel
        mouseTracking
        disableDotsControls
        disableButtonsControls
        infinite
        activeIndex={activeIndex}
        onSlideChanged={onSlideChanged}
        responsive={responsive}
      >
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </AliceCarousel>
      <RightArrow onClick={slidePrev} />,
      <LeftArrow onClick={slideNext} />,
    </div>
  )
}

export default ProjectsSlider
