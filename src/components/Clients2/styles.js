import styled from "styled-components"

// Clinets styles
export const Section = styled.section`
  position: relative;
  padding-top: 3rem;
  padding-bottom: 3rem;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    padding-top: 7rem;
    padding-bottom: 7rem;
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
  margin: 0 auto;
  padding: 10px;
  max-width: 150px;

  /* text-align: center; */
  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    padding: 1.5rem;
    max-width: initial;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    padding: 2rem 4rem;
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    padding: 2rem 5rem;
  }
`
