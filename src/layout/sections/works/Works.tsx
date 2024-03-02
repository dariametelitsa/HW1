import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Menu } from '../../../components/menu/Menu';
import { MenuData } from '../../header/Header';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from './work/Work';
import socialImg from './../../../assets/images/social.png';
import timerImg from './../../../assets/images/timer.png';

const workItems: Array<MenuData> = [
  {
    item: 'All',
    link: '#1',
  },
  {
    item: 'Landing page',
    link: '#2',
  },
  {
    item: 'React',
    link: '#3',
  },
  {
    item: 'SPA',
    link: '#4',
  },
]

export const Works = () => {
  return (
    <StyledWorks>
      <SectionTitle>My works</SectionTitle>
      <Menu items={workItems}/>
      <FlexWrapper justify='space-around'>
        <Work title={'Social network'} text={'Lorem ipsum'} src={socialImg} />
        <Work title={'Timer'} text={'Lorem ipsum'} src={timerImg} />
      </FlexWrapper>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: #f7d2d2;
`
