import styled, { css } from "styled-components";
import { theme } from "../../styles/Theme";
import { Link } from "react-scroll";


/////////////////Menu/////////////////
const MenuItem = styled.li `
  position: relative;
`

const Mask = styled.span `
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow: hidden;
  color: ${theme.colors.accent};
  transition: 0.3s;

   & + & {
     top: 50%;
     span {
       display: inline-block;
       transform: translateY(-50%);
     }
   }
`

const NavLink = styled(Link) `
  font-family: 'Josefin Sans', sans-serif;
  font-size: 30px;
  font-weight: 400;
  text-align: center;
  color: transparent;

  &::before {
    content: '';
    display: inline-block;
    height: 2px;
    background-color: ${theme.colors.accent};

    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;

    transform: scale(0);
  }

  &:hover,
  &.active {

    &::before{
      transform: scale(1);
    }

    ${Mask} {
      transform: skew(12deg) translateX(5px);
      color: ${theme.colors.font};

      & + ${Mask} {
        transform: skew(12deg) translateX(-5px);
      }
    }
  }
`


/////////////////Mobile Menu/////////////////

const MobileMenu = styled.nav`
`

const MobileMenuPopup = styled.div<{isOpen: boolean}> `
  position: fixed;
  background-color: rgba(31, 31, 31, 0.9);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  display: none;

  ${props => props.isOpen && css<{isOpen : boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
  `}

  ul {
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-direction: column;
    align-items: start;
  }
`

const BurgerButton = styled.button<{isOpen: boolean}> `
  position: fixed;
  width: 100px;
  height: 100px;
  top: 0;
  right: 0;
  z-index: 9999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.font};
    position: absolute;
    left: 40px;
    bottom: 50px;

     ${props => props.isOpen && css<{isOpen : boolean}>`
       background-color: rgba(255, 255, 255, 0);
     `}

    &::before,
    &::after {
      content: '';
      display: block;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
    }

    &::before {
      width: 36px;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{isOpen : boolean}>`
        transform: translateY(0) rotate(-45deg);
     `}
    }

    &::after {
      width: 24px;
      transform: translateY(10px);

      ${props => props.isOpen && css<{isOpen : boolean}>`
        width: 36px;
        transform: translateY(0) rotate(45deg);
     `}
    }
  }
`


/////////////////Desktop Menu/////////////////
const DesktopMenu = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    gap: 40px;
  }
`


export const S = {
  NavLink,
  MenuItem,
  Mask,
  MobileMenu,
  MobileMenuPopup,
  BurgerButton,
  DesktopMenu,
}
