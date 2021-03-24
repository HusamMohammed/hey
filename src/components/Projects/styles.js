import styled from "styled-components"

// Contact styles
export const Section = styled.section`
  position: relative;
  padding-top: 3rem;
  padding-bottom: 5rem;
  background-color: ${({ theme }) => theme.colors.skyBlue};

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    padding-top: 6rem;
    padding-bottom: 8rem;
  }
`
export const Title = styled.h2`
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: 2.5rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-align: center;
  text-shadow: 0 3px 3px rgba(0, 0, 0, 0.16);

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    margin-bottom: 5rem;
    font-size: 60px;
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
    top: 75%;
  }
`
export const LeftCircle = styled(Shape)`
  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    display: block;
    left: 0;
    top: 40%;
  }
`
const Wave = styled.div`
  position: absolute;

  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;

  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 40px;

    @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
      height: 60px;
    }

    @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
      height: 85px;
    }
  }
`
export const WaveTop = styled(Wave)`
  top: 0;
`
export const WaveBottom = styled(Wave)`
  bottom: 0;
  transform: rotate(180deg);
`

// ContactCard styles
export const ProjectCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    flex-direction: row;
  }
`
const ProjectItem = styled.div`
  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    margin: 0 2rem;
    flex: 1 0 50%;
  }
`
export const ProjectMedia = styled(ProjectItem)`
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    order: ${({ reverse }) => (reverse ? 2 : 1)};
  }
`
ProjectMedia.Wrapper = styled.div`
  position: absolute;
  top: 5%;
  left: 3%;
  right: 3%;
  bottom: 6%;
  overflow: hidden;
  cursor: pointer;
`
ProjectMedia.Frame = styled.img`
  width: 100%;
`
export const ProjectBody = styled(ProjectItem)`
  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    order: ${({ reverse }) => (reverse ? 1 : 2)};
  }
`
ProjectBody.Title = styled.h3`
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  text-align: right;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    margin-top: 0;
    margin-bottom: 2rem;
    font-size: 46px;
  }
`
ProjectBody.Desc = styled.p`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  line-height: 28px;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    margin-bottom: 2rem;
    font-size: 21px;
    line-height: 44px;
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
export const PlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  display: inline-block;
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.orange};
  color: #fff;
  font-size: 18px;
  border: none;
  border-radius: 50%;
  line-height: 50px;
  box-shadow: 0 0 24px rgb(30 153 207 / 40%);
  transform: translate(-50%, -50%);
  z-index: 99;
  cursor: pointer;

  svg {
    vertical-align: middle;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    width: 80px;
    height: 80px;
    font-size: 28px;
    line-height: 70px;
  }
`
