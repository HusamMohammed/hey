import React from "react"

import Container from "../shared/Container"
import ContactForm from "./Contact.Form"
import ContactInfo from "./Contact.Info"

import { Section, Title, Wrapper, RightCircle } from "./styles"

const Contact = () => {
  return (
    <Section id="اتصل_بنا">
      <Container>
        <Title
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="400"
          data-sal-easing="ease-out"
        >
          اتصل بنا
        </Title>
        <Wrapper>
          <ContactInfo />
          <ContactForm />
        </Wrapper>
      </Container>
      <RightCircle
        data-sal="slide-leftcircle"
        data-sal-delay="700"
        data-sal-duration="400"
        data-sal-easing="ease-out"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 60 235"
          width="65"
          height="235"
          fill="#7c1e67"
        >
          <g>
            <path d="M118 234.83C53.11 234.83 0.67 182.39 0.67 117.5C0.67 52.61 53.11 0.17 118 0.17C182.89 0.17 235.33 52.61 235.33 117.5C235.33 182.39 182.89 234.83 118 234.83Z" />{" "}
          </g>
        </svg>
      </RightCircle>
    </Section>
  )
}

export default Contact

// const WrapperShape = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 400px;
//   height: 400px;
//   margin-right: 120px;
//   border-radius: 62%;
//   background: #1e99cf;
// `
