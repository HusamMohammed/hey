import styled from "styled-components"

export const Section = styled.section`
  position: relative;
  // overflow: hidden;
  height: 100vh;
  width: 100vw;

  padding-top: 5rem;
  padding-bottom: 5rem;
  background-color: ${({ theme }) => theme.colors.white};

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    padding-top: 8rem;
    padding-bottom: 7rem;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    padding-top: 20rem;
    min-height: 100vh;
    padding-bottom: 15rem;
  }
`
export const Title = styled.h2`
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.washedBlack};
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.fontWeight.medium};

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    margin-bottom: 3rem;
    font-size: 52px;
  }
`
export const Desc = styled.p`
  position: relative;
  color: ${({ theme }) => theme.colors.washedBlack};
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  line-height: 32px;
  z-index: 1;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    font-size: 22px;
    line-height: 46px;
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    max-width: 760px;
    line-height: 51px;
  }
`
export const Shape = styled.div`
  display: none;
  position: absolute;
`
export const BigCircle = styled(Shape)`
  z-index: 0;

  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    display: block;
    top: 15rem;
    left: 38%;
  }
`
export const SmallCircle = styled(BigCircle)`
  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    display: block;
    left: -50px;
    top: calc(50% - 53px);
  }
`
export const LeftCircle = styled(Shape)`
  /* display: none; */
  display: block;
  left: -30px;
  top: 5%;

  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    left: -15px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    display: block;
    left: 1px;
    top: 70px;
  }
`
export const RightCircle = styled(Shape)`
  display: block;
  right: -30px;
  top: 50%;

  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    right: -15px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    right: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    top: 720px;
  }
`
export const HandImage = styled(Shape)`
  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    display: block;
    top: calc(15rem + 195px);
    right: 61%;
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.xl}) {
    top: calc(15rem + 180px);
  }
`
