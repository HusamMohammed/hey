import React from "react"

import { FormWrapper, Form, FormControl, Label, Input, Button } from "./styles"

const ContactForm = () => {
  return (
    <FormWrapper
      data-sal="slide-upfooter"
      data-sal-duration="400"
      data-sal-easing="ease-out"
    >
      <Form method="POST" action="/">
        <FormControl
          data-sal="slide-upfooter"
          data-sal-delay="200"
          data-sal-duration="400"
          data-sal-easing="ease-out"
        >
          <Label htmlFor="name">الاسم</Label>
          <Input id="name" type="text" name="الاسم" required />
        </FormControl>
        <FormControl
          data-sal="slide-upfooter"
          data-sal-delay="400"
          data-sal-duration="400"
          data-sal-easing="ease-out"
        >
          <Label htmlFor="phone">رقم الهاتف</Label>
          <Input id="phone" type="tel" name="رقم الهاتف" />
        </FormControl>
        <FormControl
          data-sal="slide-up"
          data-sal-delay="600"
          data-sal-duration="400"
          data-sal-easing="ease-out"
        >
          <Label htmlFor="message">الرسالة</Label>
          <Input
            id="message"
            name="الرسالة"
            // placeholder="اترك رسالة"
            required
            as="textarea"
            rows="5"
          />
        </FormControl>
        <div
          data-sal="slide-upfooter"
          data-sal-delay="600"
          data-sal-duration="400"
          data-sal-easing="ease-out"
        >
          <Button>أرسل</Button>
        </div>
      </Form>
    </FormWrapper>
  )
}

export default ContactForm
