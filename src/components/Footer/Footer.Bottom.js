import React from "react"
import styled from "styled-components"

import FooterSocialIcons from "./Footer.SocialIcons"
import FooterLinks from "./Footer.Links"

import { FooterBottomGWrapper, CopyRight } from "./styles"

const FooterBottom = () => {
  return (
    <Wrapper>
      <FooterSocialIcons />
      <FooterLinks />
      {/* <div> */}
      <CopyRight
        data-sal="slide-up"
        data-sal-delay="200"
        data-sal-duration="300"
        data-sal-easing="ease-out"
      >
        جميع الحقطة محفوظة لشركة point 2021
      </CopyRight>
      {/* </div> */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
`

export default FooterBottom
