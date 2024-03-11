import styled from "styled-components";
import { theme } from "../styles/Theme";

export const SectionTitle = styled.h2`
  position: relative;
  margin-bottom: 90px;
  font-family: "Josefin Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  text-align: center;
  font-size: 36px;
  letter-spacing: 5px;
  color: ${theme.colors.font};

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -30px;
    display: inline-block;
    width: 55px;
    height: 1px;
    background-color: ${theme.colors.accent};
  }
`
