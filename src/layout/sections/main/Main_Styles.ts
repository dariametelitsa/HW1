import { theme } from "../../../styles/Theme";
import styled from "styled-components";
import { font } from "../../../styles/Common";

const Main = styled.section`
  min-height: 100vh;
  display: flex;

  & h1 {
    display: none;
  }
`

const SmallText = styled.span`
  font-size: 14px;
  font-weight: 400;
`

const MainTitle = styled.span`
  ${font({ weight: 400, Fmax: 27, Fmin: 20})};
`

const Name = styled.h2`
  ${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 50, Fmin: 36})};
  margin: 10px 0;

  span {
    position: relative;
    z-index: 0;
    white-space: nowrap;

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${theme.colors.accent};
      z-index: -1;
    }
  }

  @media ${theme.media.mobile} {
    margin: 15px 0 22px;
  }
`

const PhotoWrapper = styled.div `
  position: relative;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    top: -24px;
    left: 24px;
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};
    z-index: -1;

    @media ${theme.media.mobile} {
      width: 314px;
      height: 414px;
      top: -17px;
      left: 20px;
    }
  }

  @media ${theme.media.tablet} {
    margin-top: 65px;
  }
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  margin-left: 10px;
  margin-right: 20px;

  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
  }
`

export const S = {
  Main,
  SmallText,
  MainTitle,
  Name,
  PhotoWrapper,
  Photo,
}
