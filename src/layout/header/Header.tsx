import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { HeaderMenu } from "./headerMenu/HeaderMenu";
import { theme } from "../../styles/Theme";
import { MobileMenu } from "./mobileMenu/MobileMenu";

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
          <HeaderMenu items={menuItems}/>
          <MobileMenu items={menuItems}/>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};


const StyledHeader = styled.header`
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: ${theme.colors.primaryBg};
  opacity: 90%;
`
