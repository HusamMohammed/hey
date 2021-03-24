import styled from "styled-components"
import { ContactBtn } from "../shared/StyledComponents"

export const HeroSection = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  /* background-color: ${({ theme }) => theme.colors.violet}; */
  /* background-size: cover; */
  /* background-repeat: no-repeat; */
  /* background-position: center; */
  /* background-attachment: fixed;
  transition: background 1s ease-out; */
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.violet};
  opacity: 0.64;
  z-index: 5;
`

export const MainContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 46%;
  left: 0;
  z-index: 9;
`

export const MainText = styled.h1`
  /* position: absolute; */
  /* width: max-content; */
  /* width: 100%;
  top: 46%; */
  /* left: 50%; */
  /* left: 0; */
  color: ${({ theme }) => theme.colors.kindaWhite};
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-align: center;
  /* transform: translateX(-50%); */

  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    font-size: 2.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    font-size: 3rem;
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    font-size: 66px;
  }
`

export const MainBtn = styled(ContactBtn)`
  padding: 0.6em 1.4em;
  font-size: 14px;
  border-radius: 5px;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    font-size: 16px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    font-size: 16px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    font-size: 18px;
  }
`

export const Curve = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
  z-index: 9;

  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 40px;

    @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
      height: 60px;
    }
    @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
      height: 100px;
    }
  }
`
