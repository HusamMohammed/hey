import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { ProjectCard } from "./styles"

const ProjectsCard = ({ project }) => {
  const { title, description, image, isLink, url } = project

  const imageData = getImage(image)

  return (
    <ProjectCard isLink={isLink} href={isLink ? url : ""} target="_blank">
      <ProjectCard.Image>
        <GatsbyImage
          image={imageData}
          alt={title}
          style={{ width: "100%", height: "100%" }}
        />
      </ProjectCard.Image>

      <ProjectCard.Title>{title}</ProjectCard.Title>
      <ProjectCard.Description>{description}</ProjectCard.Description>
    </ProjectCard>
  )
}

export default ProjectsCard
