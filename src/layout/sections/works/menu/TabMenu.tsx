import React from 'react';
import styled from 'styled-components';
import { MenuData } from '../../../header/Header';
import { Link } from "../../../../components/Link";


export const TabMenu = (props: {items: Array<MenuData>}) => {
  return (
    <StyledTabMenu>
        <ul>
          {
            props.items.map((el:MenuData, index:number) => {
              return <li key={index}>
                <Link href={el.link}>
                  {el.item}
                </Link>
              </li>
            })
          }
        </ul>
      </StyledTabMenu>
  );
};

const StyledTabMenu = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 40px;
  }
`


