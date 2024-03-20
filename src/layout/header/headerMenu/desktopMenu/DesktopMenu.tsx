import React from 'react';
import { menuData } from "../../Header";
import { Menu } from "../menu/Menu";
import { S } from "../../HeaderMenu_Styles";


export const DesktopMenu: React.FC<{items: Array<menuData>}> = (props: {items: Array<menuData>}) => {
  return (
    <S.DesktopMenu>
      <Menu items={props.items}/>
    </S.DesktopMenu>
  );
};

