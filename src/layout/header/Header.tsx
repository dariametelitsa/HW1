import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";

export interface MenuData {
  item: string;
  link: string;
}
// const menuItems: { item: string; link: string }[] = [

const menuItems: Array<MenuData> = [
  {
    item: 'Home',
    link: '#1',
  },
  {
    item: 'Skills',
    link: '#2',
  },
  {
    item: 'Works',
    link: '#3',
  },
  {
    item: 'Testimony',
    link: '#4',
  },
  {
    item: 'Contact',
    link: '#5',
  },
]


export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify={'space-between'} alignI={'center'}>
          <Logo />
          <Menu items={menuItems}/>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};


const StyledHeader = styled.header`
  background-color: antiquewhite;
`
