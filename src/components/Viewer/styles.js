import styled, { css } from "styled-components"

export const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.88);
  visibility: hidden;
  opacity: 0;
  transform: translateX(-100%);
  transition: 500ms ease-out;
  z-index: 9999;

  ${props =>
    props.openViewer &&
    css`
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
    `}
`
export const MediaWrapper = styled.div`
  position: relative;
  max-width: 940px;
  width: 85%;

  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    width: 80%;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    width: 70%;
  }
`

export const IframeWrapper = styled.div`
  width: 100%;
  padding-bottom: 56.25%;
`
export const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`
