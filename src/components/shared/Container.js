import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    max-width: ${({ theme }) => theme.breakPoints.sm};
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    max-width: ${({ theme }) => theme.breakPoints.md};
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    max-width: 1220px;
  }
`

export default Container
