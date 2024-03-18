import React from 'react';
import styled from 'styled-components';
import { MenuData } from "../../Header";
import { theme } from "../../../../styles/Theme";
import { Menu } from "../menu/Menu";


export const DesktopMenu: React.FC<{items: Array<MenuData>}> = (props: {items: Array<MenuData>}) => {
  return (
    <StyledDesktopMenu>
      <Menu items={props.items}/>
    </StyledDesktopMenu>
  );
};

const StyledDesktopMenu = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    gap: 40px;
  }
`
