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
              return (<li key={index}>
                <Link href={el.link}>
                  {el.title}
                </Link>
              </li>)
            })
          }
        </ul>
      </StyledTabMenu>
  );
};

const StyledTabMenu = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    max-width: 352px;
    width: 100%;
    margin: 0 auto 40px;
  }
`


