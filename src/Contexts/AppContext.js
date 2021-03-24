import React from "react"

const AppContext = React.createContext({
  mobileMenu: false,
  toggleMobileMenu: () => {},
  viewer: false,
  toggleViewer: () => {},
  media: null,
  updateMedia: () => {},
})

export default AppContext
