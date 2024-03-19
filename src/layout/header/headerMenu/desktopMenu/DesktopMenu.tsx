import React from 'react';
import { MenuData } from "../../Header";
import { Menu } from "../menu/Menu";
import { S } from "../../HeaderMenu_Styles";


export const DesktopMenu: React.FC<{items: Array<MenuData>}> = (props: {items: Array<MenuData>}) => {
  return (
    <S.DesktopMenu>
      <Menu items={props.items}/>
    </S.DesktopMenu>
  );
};

