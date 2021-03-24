import styled from "styled-components"

// Contact styles
export const Section = styled.section`
  position: relative;
  padding-top: 1rem;
  padding-bottom: 5rem;
  background-color: ${({ theme }) => theme.colors.white};

  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    padding-top: 2rem;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    padding-top: 5rem;
    padding-bottom: 8rem;
  }
`
export const Title = styled.h2`
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.washedBlack};
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    font-size: 36px;
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    margin-bottom: 5rem;
    font-size: 52px;
  }
  /* @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
  margin-right: 10%;
} */
`
export const Wrapper = styled.div`
  display: flex;
  //justify-content: center;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    flex-direction: row;
  }
`
const Shape = styled.div`
  display: none;
  position: absolute;
`
export const RightCircle = styled(Shape)`
  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    display: block;
    right: 0;
    top: 60%;
  }
`

// ContactForm styles
export const FormWrapper = styled.div`
  margin-bottom: -35%;
  margin-top: 3rem;
  padding: 2rem;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0px 5px 30px rgb(0 0 0 / 21%), 0 8px 15px 0px rgb(0 0 0 / 13%);
  max-width: 360px;
  align-self: center;

  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    padding: 4.5rem;
    margin-right: 5%;
    max-width: initial;
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    padding: 4.5rem;
    margin-bottom: -25%;
    margin-top: 0;
    margin-right: 10%;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    margin-right: 15%;
  }
`
export const Form = styled.form`
  max-width: 400px;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    max-width: initial;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    width: 550px;
  }
`
export const FormControl = styled.div`
  margin-bottom: 1rem;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    margin-bottom: 1.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    margin-bottom: 2rem;
  }
`
export const Label = styled.label`
  color: ${({ theme }) => theme.colors.washedBlack};

  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    font-size: 22px;
  }
`
export const Input = styled.input`
  width: 100%;
  margin-top: 0.75rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.washedBlack}; //#d0cece;
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  border-radius: 6px;
  /* box-shadow: ${({ theme }) => theme.boxShadow}; */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  //stroke border: 2px solid rgba(163, 163, 163, 0.6);
  border: 2px solid ${({ theme }) => theme.colors.violet};
  transition: border-color 300ms ease;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    font-size: 19px;
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    padding: 1.2rem;
    margin-top: 1rem;
    line-height: 28px;
  }

  &::placeholder {
    color: #d0cece;
  }

  &:focus {
    /* box-shadow: ${({ theme }) => theme.boxShadow},
      0px 2px 8px rgb(30 153 207 / 80%); */
    /* border-color: rgb(30 153 207 / 80%); */
    outline: none;
  }
`
export const Button = styled.button`
  all: unset;
  padding: 0.7rem 2.5rem;
  background-color: ${({ theme }) => theme.colors.violet};
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.washedWhite};
  border-radius: 8px;
  cursor: pointer;
  transition: transform 300ms ease-in-out;
  backface-visibility: hidden;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.16);

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    padding: 0.75rem 3rem;
    font-size: 28px;
  }
`

// ContactInfo styles
export const InfoWrapper = styled.div`
  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    margin-right: 5%;
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    align-self: center;
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    margin-right: 10%;
  }
`
export const MainText = styled.p`
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.washedBlack};
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};

  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    font-size: 22px;
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    font-size: 32px;
  }

  /* @media (min-width: ${({ theme }) => theme.breakPoints.xl}) {
    font-size: 2rem;
  } */
`
export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`
ContactItem.Text = styled.a`
  margin-right: 12px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.washedBlack};
  font-weight: ${({ theme }) => theme.fontWeight.medium};

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    font-size: 18px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    font-size: 22px;
  }
`
ContactItem.Icon = styled.div`
  color: ${({ theme }) => theme.colors.violet};
  width: 28px;
  height: 28px;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    width: 35px;
    height: 35px;
  }
`

// ContactSocial styles
export const SocialWrapper = styled.div`
  display: flex;
  margin-top: 2rem;
  margin-right: -0.9rem;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    margin-top: 2.5rem;
    margin-right: 30px;
  }
`
export const Icon = styled.a`
  padding: 0.1rem;
  margin: 0 0.9rem;
  color: ${({ theme }) => theme.colors.violet};
  font-size: 1.5rem;
  transition: transform 0.4s ease-in-out;

  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    font-size: 2rem;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    padding: 0.3rem;
    font-size: 2.2rem;
  }
`
