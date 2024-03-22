import React from 'react';
import { menuData } from "../../Header";
import { S } from "../../HeaderMenu_Styles";

export const Menu: React.FC<{items: Array<menuData>}> = (props: {items: Array<menuData>}) => {
  return (
    <ul>
      {
        props.items.map((el: menuData, index: number) => {
          return <S.MenuItem key={index}>

            <S.NavLink
              activeClass="active"
              to={el.href}
              spy={true}
              smooth={true}
            >
              {el.title}
              <S.Mask>
                <span>{el.title}</span>
              </S.Mask>
              <S.Mask>
                <span>{el.title}</span>
              </S.Mask>
            </S.NavLink>
          </S.MenuItem>
        })
      }
    </ul>
  );
};

