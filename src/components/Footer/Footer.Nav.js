import React from "react"

import { NavWrapper, FooterHeading, Item, FooterLink } from "./styles"

const FooterNav = () => {
  return (
    <NavWrapper>
      <FooterHeading
        data-sal="slide-up"
        data-sal-delay="200"
        data-sal-duration="300"
        data-sal-easing="ease-out"
      >
        نقطة
      </FooterHeading>
      <ul>
        <Item
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-duration="300"
          data-sal-easing="ease-out"
        >
          <FooterLink to="#عن_نقطة">عن نقطة</FooterLink>
        </Item>
        <Item
          data-sal="slide-up"
          data-sal-delay="400"
          data-sal-duration="300"
          data-sal-easing="ease-out"
        >
          <FooterLink to="#خدماتنا">خدماتنا</FooterLink>
        </Item>
        <Item
          data-sal="slide-up"
          data-sal-delay="500"
          data-sal-duration="300"
          data-sal-easing="ease-out"
        >
          <FooterLink to="#أعمالنا">أعمالنا</FooterLink>
        </Item>
        <Item
          data-sal="slide-up"
          data-sal-delay="600"
          data-sal-duration="300"
          data-sal-easing="ease-out"
        >
          <FooterLink to="#عملاؤنا">عملاؤنا</FooterLink>
        </Item>
        <Item
          data-sal="slide-up"
          data-sal-delay="700"
          data-sal-duration="300"
          data-sal-easing="ease-out"
        >
          <FooterLink to="#اتصل_بنا">اتصل بنا</FooterLink>
        </Item>
      </ul>
    </NavWrapper>
  )
}

export default FooterNav
