import styled from "styled-components"
import Container from "../shared/Container"

export const Section = styled.section`
  position: relative;
  padding-top: 5rem;
  padding-bottom: 5rem;
  background-color: ${({ theme }) => theme.colors.white};

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    padding-top: 8rem;
    padding-bottom: 9rem;
  }
`

export const Wrapper = styled(Container)`
  position: relative;
  z-index: 2;
  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    display: flex;
  }
`
export const Item1 = styled.div`
  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    flex: 60%;
    margin-left: 4rem;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    flex: auto;
    max-width: 470px;
    margin-left: 7rem;
  }
`

export const Item2 = styled.div`
  max-width: 450px;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    max-width: initial;
    margin: 0;
    align-self: flex-end;
  }
`

export const Title = styled.h2`
  margin-bottom: 1.5rem;
  color: #7d2068;
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    margin-bottom: 2rem;
    font-size: 40px;
  }
`
export const Desc = styled.p`
  position: relative;
  color: ${({ theme }) => theme.colors.washedBlack};
  font-size: 15px;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  line-height: 32px;
  z-index: 1;

  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    font-size: 1rem;
    line-height: 34px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    font-size: 17px;
    line-height: 38px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    font-size: 19px;
    line-height: 44px;
  }
`
