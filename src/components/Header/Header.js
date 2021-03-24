import React, { useEffect } from "react"

import Logo from "../shared/Logo"
import HeaderMenu from "./Header.Menu"
import HeaderMenuMobile from "./Header.Menu.Mobile"
import enableStickyHeader from "../../utils/enableStickyHeader"

import { HeaderWrapper, HeaderContainer, Nav, HeaderLogo } from "./styles"

const Header = () => {
  useEffect(() => {
    enableStickyHeader("Header")
  }, [])

  return (
    <HeaderWrapper id="Header">
      <HeaderContainer>
        <Nav>
          <HeaderMenuMobile />
          <HeaderMenu />
        </Nav>
        <HeaderLogo>
          <Logo />
        </HeaderLogo>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header
