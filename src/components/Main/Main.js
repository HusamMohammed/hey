import React from "react"
import styled from "styled-components"
import Particles from "react-particles-js"

import AppContext from "../../Contexts/AppContext"
import particlesConfig from "./particles-config"

const Main = ({ children }) => {
  const { mobileMenu } = React.useContext(AppContext)

  return (
    <MainW isMobileMenuOpen={mobileMenu}>
      <Particles height="100%" width="100%" params={particlesConfig} />
      {children}
    </MainW>
  )
}

const MainW = styled.main`
  position: relative;
  transition: filter 400ms ease-out;
  z-index: 1;
  filter: ${props => (props.isMobileMenuOpen ? "blur(4px)" : "blur(0px)")};
`

export default Main
