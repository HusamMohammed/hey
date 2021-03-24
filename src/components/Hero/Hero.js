import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundSlider from "gatsby-image-background-slider"

import {
  HeroSection,
  MainContainer,
  MainText,
  MainBtn,
  Curve,
  Overlay,
} from "./styles"

const Hero = () => {
  const query = useStaticQuery(graphql`
    {
      hero: homeJson {
        mainText
      }

      backgrounds: allFile(
        filter: { relativePath: { regex: "/^home.*(png|jpeg|jpg)$/" } }
        sort: { fields: base }
      ) {
        nodes {
          relativePath
          childImageSharp {
            fluid(maxWidth: 1920, quality: 85) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  // const [backImg, setBackImg] = React.useState(
  //   hero.image[0].childImageSharp.gatsbyImageData.images.fallback.src
  // )

  // console.log(backImg)

  // const imageg = getImage(hero.image[0])
  //  console.log("Im here")

  React.useEffect(() => {
    // setBackImg(
    //   hero.image[0].childImageSharp.gatsbyImageData.images.fallback.src
    // )
    //  console.log("inside eff")
    // setInterval(() => {
    //   const index = Math.floor(hero.image.length * Math.random())
    //   // console.log("index", index)
    //   // const img = getImage(hero.image[index])
    //   const img =
    //     hero.image[index].childImageSharp.gatsbyImageData.images.fallback.src
    //   //console.log("Image", img)
    //   setBackImg(img)
    // }, 5000)
  }, [])

  return (
    <HeroSection
      id="الرئيسية"
      // style={{
      //   backgroundImage: `url(${backImg})`,
      // }}
    >
      <MainContainer>
        <MainText
          data-sal="slide-uphero"
          data-sal-delay="200"
          data-sal-duration="700"
          data-sal-easing="ease"
        >
          {query.hero.mainText}
        </MainText>

        <MainBtn
          data-sal="slide-uphero"
          data-sal-delay="600"
          data-sal-duration="400"
          data-sal-easing="ease-out"
        >
          تواصل معنا
        </MainBtn>
      </MainContainer>

      <BackgroundSlider
        query={query}
        initDelay={5} // delay before the first transition (if left at 0, the first image will be skipped initially)
        transition={5} // transition duration between images
        duration={8} // how long an image is shown
        // pass down standard element props
        // style={{
        //   opacity: "0.36",
        // }}
      />

      {/* <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          backgroundColor: "#7c1e67",
          opacity: 0.64,
          zIndex: 3,
        }}
      >
        <img
          src={backImg}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            opacity: "0.36",
            transition: "all 500ms",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div> */}
      {/* <GatsbyImage
        image={imageg}
        alt=""
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          opacity: "0.36",
          transition: "all 500ms",
        }}
        placeholderStyle={{
          height: "100vh",
          width: "100vw",
        }}
      /> */}
      <Overlay></Overlay>
    </HeroSection>
  )
}

export default Hero
