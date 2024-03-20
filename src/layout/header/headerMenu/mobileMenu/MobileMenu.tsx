import React, { useState } from 'react';
import { menuData } from "../../Header";
import { Menu } from "../menu/Menu";
import { S } from "../../HeaderMenu_Styles";


export const MobileMenu: React.FC<{ items: Array<menuData> }> = (props: { items: Array<menuData> }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const onBurgerBtnClick = () => {
    setMenuIsOpen( !menuIsOpen );
  }

  return (
    <S.MobileMenu>
      <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
        <span></span>
      </S.BurgerButton>
      <S.MobileMenuPopup isOpen={ menuIsOpen } onClick={() => {setMenuIsOpen( false );}}>
        <Menu items={props.items}/>
      </S.MobileMenuPopup>

    </S.MobileMenu>
  );
};

