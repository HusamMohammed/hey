import styled from "styled-components"

// Services styles
export const Section = styled.section`
  position: relative;

  padding-top: 3rem;
  padding-bottom: 5rem;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    padding-top: 6rem;
    padding-bottom: 8rem;
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
export const RightCircle = styled(Shape)`
  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    display: block;
    right: 0;
    top: 70%;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    top: 720px;
  }
`
export const LeftCircle = styled(Shape)`
  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    display: block;
    left: 0;
    top: 30%;
  }
`

// ServiceCard styles
export const ServiceWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  text-align: center;
  border-radius: 35px;
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.boxShadow};

  transition: bacground-color 1000ms ease, height 1s ease;

  box-sizing: border-box;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    width: 200px;
    height: 200px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    height: 270px;
    width: 270px;
    border-radius: 60px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    //  display: block;
    justify-content: start;
    height: 190px;
    width: 190px;
    border-radius: 30px;
  }
`
export const ServiceTitle = styled.h3`
  position: absolute;
  top: 105%;
  color: ${({ theme }) => theme.colors.kindaBlack};
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    font-size: 28px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    font-size: 23px;
  }
`
export const ServiceImageWrapper = styled.div`
  width: 70px;

  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    width: 80px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    width: 120px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    margin-top: 50px;
    width: 100px;
  }
`
export const ServiceDesc = styled.p`
  position: absolute;
  visibility: hidden;
  color: ${({ theme }) => theme.colors.white};
  font-size: 15px;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  text-align: center;
  transform: scaleY(0);
  transform-origin: top center;
  transition: transform 800ms ease;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    font-size: 18px;
    line-height: 28px;
    padding: 0 1rem;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    font-size: 15px;
    line-height: normal;
  }
`
