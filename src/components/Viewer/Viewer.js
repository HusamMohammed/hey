import React, { useEffect, useRef } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import AppContext from "../../Contexts/AppContext"

import { Wrapper, MediaWrapper, IframeWrapper, Iframe } from "./styles"
import ToggleButton from "../shared/ToggleButton"

const ProjectsViewer = () => {
  const { viewer, media, toggleViewer, updateMedia } = React.useContext(
    AppContext
  )

  const videoUrl = `//www.youtube.com/embed/${media?.videoId?.toString()}?autoplay=1&cc_load_policy=1&controls=1&disablekb=0&enablejsapi=0&fs=1&iv_load_policy=1&loop=0&rel=0&showinfo=1&start=0&wmode=transparent&theme=dark`

  const iframeEl = useRef(null)

  const closeHandler = () => {
    toggleViewer()
    updateMedia(null)
  }

  useEffect(() => {
    if (media?.videoId) {
      iframeEl.current.src = iframeEl.current.dataset.src
    }
  }, [media])

  return (
    <Wrapper openViewer={viewer} onClick={closeHandler}>
      <MediaWrapper onClick={e => e.stopPropagation()}>
        {media?.image ? (
          <GatsbyImage image={media.image} />
        ) : (
          <IframeWrapper>
            <Iframe ref={iframeEl} src="" data-src={videoUrl} />
          </IframeWrapper>
        )}
        <ToggleButton
          state="close"
          onClick={closeHandler}
          sx={{ position: "absolute", top: "-40px", right: "-15px" }}
        />
      </MediaWrapper>
    </Wrapper>
  )
}

export default ProjectsViewer
