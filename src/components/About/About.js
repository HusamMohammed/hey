import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  Section,
  Title,
  Desc,
  BigCircle,
  SmallCircle,
  LeftCircle,
  RightCircle,
} from "./styles"
import Container from "../shared/Container"

const About = () => {
  const {
    about: { title, description },
  } = useStaticQuery(graphql`
    {
      about: aboutJson {
        title
        description
      }
    }
  `)

  return (
    <Section id="عن_نقطة">
      <Container>
        <Title
          data-sal="slide-up"
          data-sal-delay="200"
          data-sal-duration="400"
          data-sal-easing="ease-out"
        >
          {title}
        </Title>
        <Desc
          data-sal="slide-up"
          data-sal-delay="400"
          data-sal-duration="400"
          data-sal-easing="ease-out"
        >
          {description}
        </Desc>
      </Container>
      <BigCircle
        data-sal="slide-right"
        data-sal-delay="800"
        data-sal-duration="400"
        data-sal-easing="ease-out"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 562 562"
          width="562"
          height="562"
          fill="#f29309"
        >
          <g>
            <path d="M280.84 561.49C125.63 561.49 0.17 436.04 0.17 280.83C0.17 125.62 125.63 0.16 280.84 0.16C436.04 0.16 561.5 125.62 561.5 280.83C561.5 436.04 436.04 561.49 280.84 561.49Z" />
          </g>
        </svg>

        <SmallCircle
          data-sal="slide-rightcircle"
          data-sal-delay="1000"
          data-sal-duration="400"
          data-sal-easing="ease-out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 101 101"
            width="101"
            height="101"
            fill="#1e99cf"
          >
            <g>
              <path d="M50.8 100.83C23.15 100.83 0.8 78.48 0.8 50.83C0.8 23.18 23.15 0.83 50.8 0.83C78.45 0.83 100.8 23.18 100.8 50.83C100.8 78.48 78.45 100.83 50.8 100.83Z" />
            </g>
          </svg>
        </SmallCircle>
      </BigCircle>

      <LeftCircle
        data-sal="slide-rightcircle"
        data-sal-delay="500"
        data-sal-duration="400"
        data-sal-easing="ease-out"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 54 235"
          width="54"
          height="235"
          fill="#d3d3d3"
        >
          <g>
            <path d="M-64 235C-128.89 235 -181.33 182.55 -181.33 117.67C-181.33 52.78 -128.89 0.33 -64 0.33C0.89 0.33 53.33 52.78 53.33 117.67C53.33 182.55 0.89 235 -64 235Z" />
          </g>
        </svg>
      </LeftCircle>
      <RightCircle
        data-sal="slide-leftcircle"
        data-sal-delay="500"
        data-sal-duration="400"
        data-sal-easing="ease-out"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 53 235"
          width="53"
          height="235"
          fill="#1e99cf"
        >
          <g>
            <path d="M118 234.83C53.11 234.83 0.67 182.39 0.67 117.5C0.67 52.61 53.11 0.17 118 0.17C182.89 0.17 235.33 52.61 235.33 117.5C235.33 182.39 182.89 234.83 118 234.83Z" />{" "}
          </g>
        </svg>
      </RightCircle>
      {/* <HandImage
        data-sal="slide-rightcircle"
        data-sal-delay="800"
        data-sal-duration="600"
        data-sal-easing="ease-out"
      >
        <StaticImage
          src="../../../content/assets/hand.png"
          width={821}
          quality={85}
          formats={["PNG"]}
          placeholder="blurred"
          alt=""
        />
      </HandImage> */}
    </Section>
  )
}

export default About
