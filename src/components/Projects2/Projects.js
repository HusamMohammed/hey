import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import ProjectsSlider from "./Projects.Slider2"

import Container from "../shared/Container"
import { Title, SubTitle, ContactBtn } from "../shared/StyledComponents"
import { Section } from "./styles"

const Projects = () => {
  const { projects, subTitle } = useStaticQuery(graphql`
    {
      projects: allProjects1Json {
        nodes {
          title
          description
          isLink
          url
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
      subTitle: subTitesJson {
        projects
      }
    }
  `)

  return (
    <Section id="أعمالنا" className="projects">
      <Container>
        <Title
          data-sal="slide-up"
          data-sal-delay="200"
          data-sal-duration="400"
          data-sal-easing="ease-out"
        >
          أعمالنا
        </Title>
        <SubTitle
          data-sal="slide-up"
          data-sal-delay="400"
          data-sal-duration="400"
          data-sal-easing="ease-out"
        >
          {subTitle.projects}
        </SubTitle>
        <ProjectsSlider projects={projects.nodes} />
        <ContactBtn
          data-sal="slide-up"
          data-sal-delay="500"
          data-sal-duration="300"
          data-sal-easing="ease-out"
        >
          تواصل معنا
        </ContactBtn>
      </Container>
    </Section>
  )
}

export default Projects
