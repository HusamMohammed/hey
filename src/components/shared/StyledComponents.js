import styled from "styled-components"

export const Title = styled.h2`
  margin-bottom: 0.8rem;
  color: #7d2068;
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    margin-bottom: 1.2rem;
    font-size: 40px;
  }
`
export const SubTitle = styled.p`
  max-width: 730px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2.5rem;
  color: #28384e;
  font-size: 12px;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    margin-bottom: 5rem;
    font-size: 15px;
  }
`

export const ContactBtn = styled.button`
  display: block;
  width: fit-content;
  margin: 1rem auto 0;
  padding: 0.75em 1.85em;
  background-color: #f29324;
  color: #fff;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  border-radius: 99px;
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    font-size: 20px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    margin: 2.5rem auto 0;
    font-size: 22px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    font-size: 24px;
  }
`
