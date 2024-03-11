import React from 'react';
import styled from 'styled-components';
import { MenuData } from "../Header";
import { theme } from "../../../styles/Theme";


export const HeaderMenu = (props: {items: Array<MenuData>}) => {
  return (
    <StyledHeaderMenu>
      <ul>
        {
          props.items.map((el:MenuData, index:number) => {
            return <ListItem key={index}>
              <Link href={el.link}>
                {el.item}
                <Mask>
                  <span>{el.item}</span>
                </Mask>
                <Mask>
                  <span>{el.item}</span>
                </Mask>
              </Link>
            </ListItem>
          })
        }
      </ul>
    </StyledHeaderMenu>
  );
};

const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    gap: 40px;
  }
  li {
    list-style-type: none;
  }
`

const Link = styled.a `
  font-family: 'Josefin Sans', sans-serif;
  font-size: 30px;
  font-weight: 400;
  text-align: center;
  color: transparent;
`

const Mask = styled.span `
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow: hidden;
    color: ${theme.colors.accent};
  transition: 0.3s;

   & + & {
     top: 50%;
     span {
       display: inline-block;
       transform: translateY(-50%);

     }
   }
`


const ListItem = styled.li `
  position: relative;

  &::before {
    content: '';
    display: inline-block;
    height: 2px;
    background-color: ${theme.colors.accent};

    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;

    transform: scale(0);
  }

  &:hover {

    &::before{
      transform: scale(1);
    }

    ${Mask} {
    transform: skew(12deg) translateX(5px);
      color: ${theme.colors.font};

      & + ${Mask} {
        transform: skew(12deg) translateX(-5px);
      }
    }
  }
`
