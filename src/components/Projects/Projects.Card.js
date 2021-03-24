import React, { useContext } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import AppContext from "../../Contexts/AppContext"

import {
  ProjectCardWrapper,
  ProjectMedia,
  ProjectBody,
  Button,
  PlayButton,
} from "./styles"

const ProjectsCard = ({ project, reverse }) => {
  const { title, description, image, isVideo, videoId } = project

  const { toggleViewer, updateMedia } = useContext(AppContext)

  const imageData = image.childImageSharp ? getImage(image) : null
  // let videoUrl
  // let ff
  // if (!isVideo) {
  //   //console.log(title, "++++++++++")
  //   imageData = image.childImageSharp ? getImage(image) : null
  //   //console.log("--------------------")
  // } else {
  //   // const folder = reverse ? "projects2" : "projects1"
  //   // videoUrl = `../../../content/data/${folder}/${video}`
  //   // ff = React.lazy(() => import("../../../content/data/projects2/a.mp4"))
  //   //import videoo from videoUrl
  // }
  const imageClikcHandler = () => {
    if (isVideo) {
      updateMedia({ videoId: videoId })
    } else {
      updateMedia({ image: imageData })
    }
    toggleViewer()
  }

  return (
    <ProjectCardWrapper>
      <ProjectMedia reverse={reverse}>
        <ProjectMedia.Frame src="/frame.png" alt="" />
        <ProjectMedia.Wrapper onClick={imageClikcHandler}>
          <GatsbyImage
            image={imageData}
            alt={title}
            style={{ width: "100%", height: "100%" }}
          />
          {isVideo ? (
            <PlayButton>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
              </svg>
            </PlayButton>
          ) : null}
        </ProjectMedia.Wrapper>
      </ProjectMedia>
      <ProjectBody reverse={reverse}>
        <ProjectBody.Title>{title}</ProjectBody.Title>
        <ProjectBody.Desc>{description}</ProjectBody.Desc>
        <Button onClick={imageClikcHandler}>مشاهدة</Button>
      </ProjectBody>
    </ProjectCardWrapper>
  )
}

export default ProjectsCard
