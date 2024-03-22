import styled, { css } from "styled-components";
import { theme } from "../styles/Theme";

export const Link = styled.a<{active?: boolean}>`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 10px;

  position: relative;
  z-index: 0;

  &:hover {
    &::before {
      height: 10px;
    }
  }

  &::before {
    content: '';
    display: inline-block;
    background-color: ${theme.colors.accent};
    height: 0;

    position: absolute;
    bottom: 5px;
    right: 0;
    left: 0;
    z-index: -1;

    transition: ${theme.animations.transition};

    ${props => props.active && css<{active?: boolean}>`
      height: 10px;
    `}
  }
`
