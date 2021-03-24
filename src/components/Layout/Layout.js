import * as React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"

import AppProvider from "../../Contexts/AppProvider"

import Header from "../Header/Header"
import Main from "../Main/Main"
import Footer from "../Footer/Footer"
import Viewer from "../Viewer/Viewer"
import theme from "../../styles/theme"

// import "swiper/swiper.min.css"
import "swiper/swiper-bundle.min.css"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
// import "swiper/components/navigation/navigation.min.css"
// import "swiper/components/pagination/pagination.min.css"

import "react-alice-carousel/lib/alice-carousel.css"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <>
          <Header />
          <Main>{children}</Main>
          <Footer />
          <Viewer />
        </>
      </ThemeProvider>
    </AppProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
