import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import ContactSocial from "./Contact.Social"

import { InfoWrapper, ContactItem, MainText } from "./styles"

const ContactInfo = () => {
  const { contact } = useStaticQuery(graphql`
    {
      contact: contactJson {
        email
        phone
        location
      }
    }
  `)
  return (
    <InfoWrapper>
      <MainText
        data-sal="slide-upfooter"
        data-sal-duration="400"
        data-sal-easing="ease-out"
      >
        لا تتردد في التواصل معنا
      </MainText>
      <ContactItem
        data-sal="slide-upfooter"
        data-sal-delay="200"
        data-sal-duration="400"
        data-sal-easing="ease-out"
      >
        <ContactItem.Icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 35 35"
            fill="currentColor"
          >
            <g>
              <path d="M25.302,0H9.698c-1.3,0-2.364,1.063-2.364,2.364v30.271C7.334,33.936,8.398,35,9.698,35h15.604   c1.3,0,2.364-1.062,2.364-2.364V2.364C27.666,1.063,26.602,0,25.302,0z M15.004,1.704h4.992c0.158,0,0.286,0.128,0.286,0.287   c0,0.158-0.128,0.286-0.286,0.286h-4.992c-0.158,0-0.286-0.128-0.286-0.286C14.718,1.832,14.846,1.704,15.004,1.704z M17.5,33.818   c-0.653,0-1.182-0.529-1.182-1.183s0.529-1.182,1.182-1.182s1.182,0.528,1.182,1.182S18.153,33.818,17.5,33.818z M26.021,30.625   H8.979V3.749h17.042V30.625z" />
            </g>
          </svg>
        </ContactItem.Icon>
        <ContactItem.Text as="p">{contact.phone}</ContactItem.Text>
      </ContactItem>
      <ContactItem
        data-sal="slide-upfooter"
        data-sal-delay="400"
        data-sal-duration="400"
        data-sal-easing="ease-out"
      >
        <ContactItem.Icon>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 14 16"
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: "100%" }}
          >
            <path
              fillRule="evenodd"
              d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"
            ></path>
          </svg>
        </ContactItem.Icon>
        <ContactItem.Text href="mailto:hello@pointksa.net">
          {contact.email}
        </ContactItem.Text>
      </ContactItem>
      <ContactItem
        data-sal="slide-upfooter"
        data-sal-delay="400"
        data-sal-duration="400"
        data-sal-easing="ease-out"
      >
        <ContactItem.Icon>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 0c-2.761 0-5 2.239-5 5 0 5 5 11 5 11s5-6 5-11c0-2.761-2.239-5-5-5zM8 8c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path>
          </svg>
        </ContactItem.Icon>
        <ContactItem.Text as="p">{contact.location}</ContactItem.Text>
      </ContactItem>

      <ContactSocial />
    </InfoWrapper>
  )
}

export default ContactInfo
