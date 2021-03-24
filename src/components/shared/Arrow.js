import React from "react"
import styled from "styled-components"

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  width: 26px;
  height: 26px;
  background-color: #e8ecef;
  border-radius: 50%;
  transform: translateY(-50%);
  transition: background-color 100ms ease;
  cursor: pointer;
  z-index: 3;

  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    width: 32px;
    height: 32px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    width: 40px;
    height: 40px;
  }

  &.right {
    right: -10px;

    @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
      right: -15px;
    }

    @media (min-width: 1300px) {
      right: -40px;
    }
  }

  &.left {
    left: -10px;

    @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
      left: -15px;
    }

    @media (min-width: 1300px) {
      left: -40px;
    }
  }

  svg {
    position: absolute;
    width: 9px;
    height: 12px;
    top: 50%;
    left: 50%;
    color: #505965;
    transform: translate(-50%, -50%);
    transition: inherit;

    @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
      width: 10px;
      height: 14px;
    }

    @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
      width: 12px;
      height: 18px;
    }
  }

  &:hover,
  &:active {
    background-color: #7d2068;
    svg {
      color: #fff;
    }
  }
`

const LeftArrow = props => {
  return (
    <Arrow onClick={props.onClick} className="left">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 20">
        <g>
          <path
            fill="currentColor"
            d="M9.57 19.73L11.8 17.44L4.57 9.99L11.8 2.54L9.57 0.25L0.1 9.99L9.57 19.73Z"
          />
        </g>
      </svg>
    </Arrow>
  )
}

const RightArrow = props => {
  return (
    <Arrow onClick={props.onClick} className="right">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 21">
        <g id="Bullex – 1">
          <g id="Group 3">
            <path
              fill="currentColor"
              d="M2.43 0.65L0.2 2.94L7.43 10.39L0.2 17.84L2.43 20.13L11.9 10.39L2.43 0.65Z"
            />
          </g>
        </g>
      </svg>
    </Arrow>
  )
}

export { LeftArrow, RightArrow }
