import styled from "styled-components";
import { theme } from "../styles/Theme";

export const IconWrapper = styled.div `
  position: relative;
  font-size: 0;
  color: ${theme.colors.accent};

  &::before {
    content: '';
    position: absolute;
    width: 80px;
    height: 80px;
    background-color: rgba(255, 255, 255, 0.1);

    transform: translate(-50%, -50%) rotate(45deg);
    left: 50%;
    top: 50%;
  }
`
