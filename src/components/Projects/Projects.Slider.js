import React from "react"
import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Pagination } from "swiper"

import ProjectCard from "./Projects.Card"

SwiperCore.use([Pagination])

const ProjectsSlider = ({ projects, reverse }) => {
  return (
    <ProjectSwiper
      pagination={{ clickable: true }}
      height="auto"
      speed={800}
      slidesPerView={1}
      spaceBetween={0}
      // breakpoints={{
      //   400: {
      //     slidesPerView: 4,
      //   },
      //   640: {
      //     slidesPerView: 4,
      //     spaceBetween: 5,
      //   },
      // }}
      className={reverse ? "projects__reverse" : ""}
      data-sal="slide-up"
      data-sal-delay="150"
      data-sal-duration="500"
      data-sal-easing="ease-out"
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index}>
          <ProjectCard project={project} reverse={reverse} />
        </SwiperSlide>
      ))}
    </ProjectSwiper>
  )
}

const ProjectSwiper = styled(Swiper)`
  /* height: 130px; */
  padding-bottom: 6rem;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    /* height: 300px; */
    padding-top: 3rem;
    padding-bottom: 7rem;
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    /* height: 520px; */
    padding-top: 5rem;
    padding-bottom: 8rem;
  }
`

export default ProjectsSlider
