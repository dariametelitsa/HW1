import styled from "styled-components";
import { theme } from "../styles/Theme";
import { font } from "../styles/Common";

export const SectionTitle = styled.h2`
  position: relative;
  margin-bottom: 90px;
  ${font({family: "'Josefin Sans', sans-serif", weight: 600, Fmax: 36, Fmin: 30})}
  font-optical-sizing: auto;
  font-style: normal;
  text-align: center;
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

    @media ${theme.media.mobile} {
      bottom: -24px;
    }
  }
`
