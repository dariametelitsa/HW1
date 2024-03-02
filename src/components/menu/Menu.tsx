import React from 'react';
import styled from 'styled-components';
import { MenuData } from '../../layout/header/Header';

// type MenuPropsType = {
//   // items: { item: string; link: string; }[],
//   items: Array<Menus>,
// }

export const Menu = (props: {items: Array<MenuData>}) => {
  return (
    <StyledMenu>
        <ul>
          {
            props.items.map((el:MenuData) => {
              return <li>
              <a href={el.link}>{el.item}</a>
            </li> 
            })
          }
        </ul>
      </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 40px;
  }
  li {
    list-style-type: none;
  }
  
`