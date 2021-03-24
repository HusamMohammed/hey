import * as React from "react"

import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"
import About from "../components/About2/About"
import Services from "../components/Services2/Services"
import Projects from "../components/Projects2/Projects"
import Clients from "../components/Clients2/Clients"
import SEO from "../components/SEO/SEO"

const IndexPage = () => (
  <Layout>
    <SEO title="نقطة" />

    <Hero />
    <About />
    <Services />
    <Projects />
    <Clients />
  </Layout>
)

export default IndexPage
