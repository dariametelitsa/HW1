import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Header = styled.header`
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: ${theme.colors.primaryBg};
  opacity: 90%;
`

export const S = {
  Header,
}
