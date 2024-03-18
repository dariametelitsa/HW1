import React from 'react';
import { MenuData } from "../../Header";
import { Menu } from "../menu/Menu";
import { S } from "../../HeaderMenu_Styles";


export const MobileMenu: React.FC<{items: Array<MenuData>}> = (props: {items: Array<MenuData>}) => {
  return (
    <S.MobileMenu>
      <S.BurgerButton isOpen = {false}>
        <span></span>
      </S.BurgerButton>
      <S.MobileMenuPopup isOpen = {false}>
        <Menu items={props.items}/>
      </S.MobileMenuPopup>

    </S.MobileMenu>
  );
};

