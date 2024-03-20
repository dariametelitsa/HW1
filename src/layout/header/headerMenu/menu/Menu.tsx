import React from 'react';
import { menuData } from "../../Header";
import { S } from "../../HeaderMenu_Styles";

export const Menu: React.FC<{items: Array<menuData>}> = (props: {items: Array<menuData>}) => {
  return (
    <ul>
      {
        props.items.map((el: menuData, index: number) => {
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

