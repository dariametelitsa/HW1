import React from 'react';
import { MenuData } from "../../Header";
import { S } from "../../HeaderMenu_Styles";

export const Menu: React.FC<{items: Array<MenuData>}> = (props: {items: Array<MenuData>}) => {
  return (
    <ul>
      {
        props.items.map((el: MenuData, index: number) => {
          return <S.MenuItem key={index}>
            <S.Link href={el.link}>
              {el.title}
              <S.Mask>
                <span>{el.title}</span>
              </S.Mask>
              <S.Mask>
                <span>{el.title}</span>
              </S.Mask>
            </S.Link>
          </S.MenuItem>
        })
      }
    </ul>
  );
};

