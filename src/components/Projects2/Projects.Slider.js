import React from "react"
import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Pagination } from "swiper"
//import { GatsbyImage, getImage } from "gatsby-plugin-image"

import ProjectCard from "./Projects.Card"

//mport { ProjectCard } from "./styles"
//import { getImage } from "gatsby-plugin-image"

SwiperCore.use([Pagination])

const ProjectsSlider = ({ projects }) => {
  // console.log(projects)

  const [hasMounted, setHasMounted] = React.useState(false)

  React.useEffect(() => {
    setHasMounted(!hasMounted)
    console.log("Mounted")
  }, [])

  return (
    <ProjectSwiper
      loop
      pagination={{ clickable: true }}
      speed={600}
      slidesPerView={2}
      spaceBetween={20}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
        1250: {
          slidesPerView: 4,
        },
      }}
      // onBeforeTransitionStart={swiper => {
      //   console.log("ehy", swiper)
      //   swiper.loopDestroy()
      //   swiper.loopCreate()
      // }}
      // data-sal="slide-up"
      // data-sal-delay="150"
      // data-sal-duration="500"
      // data-sal-easing="ease-out"
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index}>
          <ProjectCard project={project} />
        </SwiperSlide>
      ))}

      {/* <SwiperSlide>
        <ProjectCard
          isLink={projects[3].isLink}
          href={projects[3].isLink ? projects[3].url : ""}
          target="_blank"
        >
          <ProjectCard.Image>
            <GatsbyImage
              image={getImage(projects[3].image)}
              alt={projects[3].title}
              style={{ width: "100%", height: "100%" }}
            />
          </ProjectCard.Image>

          <ProjectCard.Title>{projects[3].title}</ProjectCard.Title>
          <ProjectCard.Description>
            {projects[3].description}
          </ProjectCard.Description>
        </ProjectCard>
      </SwiperSlide> */}
    </ProjectSwiper>
  )
}

const ProjectSwiper = styled(Swiper)`
  padding-bottom: 1rem;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    padding-bottom: 2rem;
  }
`

export default ProjectsSlider
