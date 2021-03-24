import React from "react"

import Logo from "../shared/Logo"
import {
  FormWrapper,
  Wrapper,
  FooterLogo,
  FooterFormText,
  Form,
  EmailInput,
  SubmitButton,
} from "./styles"

const FooterForm = () => {
  return (
    <FormWrapper>
      <Wrapper
        data-sal="slide-up"
        data-sal-delay="200"
        data-sal-duration="400"
        data-sal-easing="ease-out"
      >
        <FooterLogo>
          <Logo />
        </FooterLogo>
        <FooterFormText
          data-sal="slide-up"
          data-sal-delay="200"
          data-sal-duration="400"
          data-sal-easing="ease-out"
        >
          نحن شغوفون دائماً بالعمل الدؤوب لتحقيق النهايات السعيدة، وإحداث
          التغيير.
        </FooterFormText>
      </Wrapper>
      <Form
        data-sal="slide-up"
        data-sal-delay="400"
        data-sal-duration="400"
        data-sal-easing="ease-out"
      >
        <EmailInput placeholder="ادخل بريد الالكتروني" />
        <SubmitButton>ارسل</SubmitButton>
      </Form>
    </FormWrapper>
  )
}

export default FooterForm
