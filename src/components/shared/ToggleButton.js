import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

const Button = styled.button`
  padding: 0.5rem;
  margin-top: -0.5rem;
  margin-right: -0.5rem;
  cursor: pointer;

  ${props =>
    props.state === "close" &&
    css`
      span:first-child {
        transform: rotate(45deg);
      }

      span:nth-child(2) {
        opacity: 0;
      }

      span:last-child {
        transform: rotate(-45deg);
      }
    `}

  ${props => (props.sx ? props.sx : {})}
`
Button.propTypes = {
  state: PropTypes.oneOf(["default", "close"]),
}

Button.defaultProps = {
  state: "default",
}

const Bar = styled.span`
  display: block;
  width: 26px;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.white};
  transition: all 300ms ease-in-out;
  transform-origin: 3px 1px;
  pointer-events: none;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`
const ToggleButton = ({ state, onClick, sx }) => {
  return (
    <Button state={state} onClick={onClick} sx={sx}>
      <Bar />
      <Bar />
      <Bar />
    </Button>
  )
}

export default ToggleButton
