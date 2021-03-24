import styled, { css } from "styled-components"

// Contact styles
export const Section = styled.section`
  position: relative;
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: ${({ theme }) => theme.colors.white};

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
`

// ProjectsCard styles
export const ProjectCard = styled.a`
  display: block;
  width: 100%;
  padding-bottom: 1rem;
  text-align: center;
  direction: rtl;
  transition: box-shadow 0.3s ease-out;

  &:hover {
    box-shadow: 0px 3px 24px rgba(0, 0, 0, 0.16);
  }

  ${props =>
    !props.isLink &&
    css`
      pointer-events: none;
    `}

  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    padding-bottom: 1.5rem;
  }
`
ProjectCard.Image = styled.div`
  height: 190px;

  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    height: 230px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    height: 290px;
  }
`

ProjectCard.Title = styled.h3`
  margin: 1rem 0;
  color: #1a1a1a;
  font-size: 18px;

  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    font-size: 20px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    margin: 1.5rem 0;
    font-size: 24px;
  }
`

ProjectCard.Description = styled.p`
  padding: 0 0.5rem;
  color: #484848;
  font-size: 13px;
  font-weight: 300px;

  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    padding: 0 0.75rem;
    font-size: 15px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    font-size: 18px;
  }
`

export const Button = styled.button`
  all: unset;
  padding: 0.35rem 1.4rem;
  background-color: ${({ theme }) => theme.colors.orange};
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.washedWhite};
  border-radius: 99px;
  cursor: pointer;
  transition: transform 300ms ease-in-out;
  backface-visibility: hidden;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.16);

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    padding: 0.7rem 2.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    padding: 0.75rem 3rem;
    font-size: 28px;
  }
`
