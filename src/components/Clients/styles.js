import styled from "styled-components"

// Clinets styles
export const Section = styled.section`
  position: relative;
  padding-top: 3rem;
  padding-bottom: 5rem;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
`
export const Title = styled.h2`
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.washedBlack};
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    margin-bottom: 5rem;
    font-size: 52px;
  }
`
const Shape = styled.div`
  display: none;
  position: absolute;
`
export const LeftCircle = styled(Shape)`
  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    display: block;
    left: 0;
    top: 35%;
  }
`

// Clinet styles
export const ClientWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 20px;

  @media (min-width: 460px) {
    width: 125px;
    height: 125px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    width: 180px;
    height: 180px;
    border-radius: 30px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    width: 250px;
    height: 250px;
    border-radius: 45px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    width: 380px;
    height: 380px;
    border-radius: 30px;
    width: 100%;
    height: 100%;
  }
`
export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 70px;

  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    max-width: 120px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    max-width: 180px;
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    max-width: 100px;
  }
`
