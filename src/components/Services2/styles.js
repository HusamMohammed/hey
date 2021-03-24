import styled from "styled-components"

// Services styles
export const Section = styled.section`
  position: relative;
  padding-top: 3rem;
  padding-bottom: 0rem;
  background-color: #ededed;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    padding-top: 6rem;
    padding-bottom: 0rem;
  }
`

// ServiceCard styles
export const ServiceCard = styled.div`
  display: block;
  width: 100%;
  padding-bottom: 1rem;
  text-align: center;
  direction: rtl;

  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    padding-bottom: 2rem;
  }

  @media (max-width: 520px) {
    max-width: 210px;
    margin: 0 auto;
  }
`
ServiceCard.Image = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 50%;

  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    padding: 2.5rem;
    width: 140px;
    height: 140px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    width: 160px;
    height: 160px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    padding: 3rem;
    width: 180px;
    height: 180px;
  }
`

ServiceCard.Title = styled.h3`
  margin: 1rem 0;
  color: #1e99cf;
  font-size: 16px;

  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    font-size: 20px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    // margin: 1.5rem 0;
    font-size: 23px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    // margin: 1.5rem 0;
    font-size: 26px;
  }
`

ServiceCard.Description = styled.p`
  padding: 0 0.5rem;
  color: #484848;
  font-size: 13px;
  font-weight: 300px;

  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    padding: 0 0.75rem;
    font-size: 15px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    font-size: 16px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    font-size: 17px;
  }
`
