import { Link } from "gatsby"
import styled from "styled-components"
import Container from "../shared/Container"

export const HeaderWrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 0;
  background-color: transparent;
  transition: background-color 400ms ease-out;
  z-index: 99;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    padding: 2rem 0;
  }

  &.slide-down {
    position: fixed;
    top: 0;
    padding: 0.5rem 0;
    background-color: ${({ theme }) => theme.colors.violet};
    border-radius: 0 0 10px 10px;
    box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.09);
    visibility: hidden;

    @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
      padding: 1rem 0;
      border-radius: 0 0 20px 20px;
    }
    animation: slideDown 0.4s ease-out forwards;
  }

  &.slide-up {
    position: fixed;
    top: 0;
    padding: 0.5rem 0;
    background-color: ${({ theme }) => theme.colors.violet};
    border-radius: 0 0 10px 10px;
    box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.09);
    visibility: hidden;

    @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
      padding: 1rem 0;
      border-radius: 0 0 20px 20px;
    }
    animation: slideUp 0.4s ease-in forwards;
  }
`
export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
`
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const HeaderLogo = styled.div`
  width: 50px;

  @media (min-width: ${({ theme }) => theme.breakPoints.md}) {
    width: 65px;
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    width: 87;
  }
`

export const MenuList = styled.ul`
  display: none;

  @media (min-width: 991px) {
    display: flex;
  }
`
export const MenuListItem = styled.li`
  padding: 0 28px;

  &:first-of-type {
    padding-right: 0;
  }

  @media (max-width: 1023px) {
    width: fit-content;
    padding: 1.2rem 0;
    text-align: center;
    opacity: 0;

    &:first-of-type {
      padding-right: 0;
    }
  }
`
export const MenuLink = styled(Link)`
  position: relative;
  color: ${({ theme }) => theme.colors.washedWhite};
  font-size: ${({ theme }) => theme.fontSizes.f18};
  font-weight: 500;
  transition: color 300ms ease;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    width: 0;
    height: 2px;
    bottom: -1px;
    background-color: ${({ theme }) => theme.colors.orange};
    opacity: 0;
    transition: 300ms ease-in-out;
    transition-property: width, opacity;
  }

  &:hover,
  &.active {
    color: ${({ theme }) => theme.colors.orange};

    &::before {
      opacity: 1;
      width: 100%;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.lg}) {
    font-size: ${({ theme }) => theme.fontSizes.f22};
  }
`

export const MobileMenuWrapper = styled.div`
  display: none;

  @media (max-width: 990px) {
    display: block;
  }
`
export const MobileMenuList = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  left: -82%;
  top: 0;
  z-index: 999;
  height: 100vh;
  padding-top: 30%;
  background: ${({ theme }) => theme.colors.violet};
  opacity: 1;
  transition: left 600ms ease-out;
  border-radius: 0 10px 10px 0;
  box-shadow: 3px 0px 4px 0px rgb(0 0 0 / 5%);

  &.active {
    left: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    width: 70%;
    left: -72%;
    /* width: calc(100vw * 0.7);
    left: calc((-100vw + 640px) / 2 - 100vw * 0.7);

    &.active {
      left: calc((-100vw + 640px) / 2);
    } */
  }
`
export const ToggleButton = styled.button`
  padding: 0.5rem;
  margin-top: -0.5rem;
  margin-right: -0.5rem;
  cursor: pointer;

  &.active {
    span:first-child {
      transform: rotate(45deg);
    }

    span:nth-child(2) {
      opacity: 0;
    }

    span:last-child {
      transform: rotate(-45deg);
    }
  }
`
export const Bar = styled.span`
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
