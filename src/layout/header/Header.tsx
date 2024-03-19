import React from 'react';
import { Logo } from '../../components/logo/Logo';
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { DesktopMenu } from "./headerMenu/desktopMenu/DesktopMenu";
import { MobileMenu } from "./headerMenu/mobileMenu/MobileMenu";
import { S } from "./Header_Styles";



export const Header: React.FC = () => {

  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint: number = 768;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);


  return (
    <S.Header>
      <Container>
        <FlexWrapper justify={'space-between'} alignI={'center'}>
          <Logo />
          {width < breakpoint ? <MobileMenu items={menuItems}/> : <DesktopMenu items={menuItems}/>}
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};

export interface MenuData {
  item: string;
  link: string;
}

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
