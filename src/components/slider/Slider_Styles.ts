import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Slider = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Slide = styled.div`
  text-align: center;
`

const Name = styled.span`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;

  margin: 22px 0 32px;
  display: inline-block;
`

const Pagination = styled.div`
  span {
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.5);

    & + span {
      margin-left: 5px;
    }

    &.active {
      width: 20px;
      background-color: ${theme.colors.accent};
    }
  }
`

export const S = {
  Slider,
  Slide,
  Name,
  Pagination,
}
