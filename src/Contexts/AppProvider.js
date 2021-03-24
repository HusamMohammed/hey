import React from "react"
import AppContext from "./AppContext"

const AppProvider = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [isViewerOpen, setIsViewerOpen] = React.useState(false)
  const [viewerMedia, setViewerMedia] = React.useState(null)

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  const toggleViewer = () => setIsViewerOpen(!isViewerOpen)
  const updateMedia = media => setViewerMedia(media)

  return (
    <AppContext.Provider
      value={{
        mobileMenu: isMobileMenuOpen,
        toggleMobileMenu,
        viewer: isViewerOpen,
        toggleViewer,
        media: viewerMedia,
        updateMedia,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
