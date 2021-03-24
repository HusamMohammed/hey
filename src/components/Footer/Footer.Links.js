import React from "react"

import { LinksWrapper, FooterBottomLink } from "./styles"

const FooterLinks = () => {
  return (
    <LinksWrapper
      data-sal="slide-up"
      data-sal-delay="300"
      data-sal-duration="400"
      data-sal-easing="ease-out"
    >
      <FooterBottomLink href="">السجل التجاري</FooterBottomLink>
      <FooterBottomLink href="">شروط الاستخدام</FooterBottomLink>
      <FooterBottomLink href="">سياسة الخصوصية</FooterBottomLink>
    </LinksWrapper>
  )
}

export default FooterLinks
