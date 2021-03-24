import styled from "styled-components"
import { Link } from "gatsby"

// Footer styles
export const Divider = styled.div`
  height: 2px;
  width: 100%;
  margin-bottom: 1.5rem;
  background-color: #fff;
  opacity: 0.1;

  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    margin-bottom: 2rem;
  }
`

// FooterAAA styles
export const FooterLinkk = styled.a`
  display: block;
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.washedWhite};
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};

  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    font-size: 22px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    margin-top: 2rem;
    font-size: 27px;
  }
`

export const CopyRight = styled.p`
  font-size: 15px;
  color: #e9e9e9;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    margin-top: 1rem;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    order: 1;
    margin-top: 0;
    font-size: 17px;
  }
`

// FooterForm styles
export const FormWrapper = styled.div`
  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    grid-area: form;
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    align-self: end;
  }
`
export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 1.5rem;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    margin-bottom: 2rem;
  }
`
export const FooterLogo = styled.div`
  width: 50px;
  flex-shrink: 0;

  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    width: 65px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    width: 82px;
  }
`
export const FooterFormText = styled.p`
  max-width: 300px;
  margin-right: 1.5rem;
  align-self: flex-end;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.white};

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    margin-right: 2rem;
  }
`
export const Form = styled.form`
  position: relative;
  max-width: 360px;
  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    max-width: 430px;
  }
`
export const EmailInput = styled.input.attrs({
  type: "email",
  required: true,
})`
  width: 100%;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;

  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    padding: 1rem;
  }

  &::placeholder {
    color: #717983;
  }

  &:focus {
    outline: none;
  }
`
export const SubmitButton = styled.button.attrs({
  type: "submit",
})`
  all: unset;
  position: absolute;
  width: 25%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.skyBlue};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 5px 0 0 5px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #10a3e3;
  }
`

// FooterNav & FooterContactInfo styles
export const NavWrapper = styled.div`
  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    grid-area: nav;
  }
`
export const ContactWrapper = styled.div`
  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    grid-area: contact;
  }
`
export const FooterHeading = styled.p`
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: 17px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`
export const Item = styled.li`
  margin-top: 1rem;
  color: #a9b2bc;
  font-size: 14px;

  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    margin-top: 26px;
  }
`
export const FooterLink = styled(Link)`
  color: inherit;
  font-size: inherit;
`

// FooterLSC styles
export const LSCWrapper = styled.div`
  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    grid-area: lsc;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    align-self: end;
    margin-bottom: 2rem;
  }
`
export const SvgText = styled.svg`
  max-width: 220px;

  /* @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    max-width: initial;
  } */
`
export const SvgImg = styled.svg`
  max-width: 158px;
  height: auto;
`

//
export const FooterBottomGWrapper = styled.div`
  margin-bottom: 1rem;

  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    margin-bottom: 0;
  }
`

// FooterLinks styles
export const LinksWrapper = styled(FooterBottomGWrapper)`
  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    order: 3;
  }
`
export const FooterBottomLink = styled(FooterLink)`
  display: inline-block;
  margin-left: 2rem;
  margin-bottom: 1rem;
  color: #a9b2bc;
  font-size: 14px;

  &:last-of-type {
    margin-left: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    margin-bottom: 0;
  }
`

// FooterSocialIcons styles
export const SocialIconsWrapper = styled(FooterBottomGWrapper)`
  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    order: 2;
  }
`
export const SocialIcon = styled.a`
  display: inline-block;
  height: fit-content;
  margin-left: 1rem;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  &:last-of-type {
    margin-left: 0;
  }

  &:hover {
    transform: scale(1.1);
  }
`
