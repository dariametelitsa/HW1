import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { TabMenu } from './menu/TabMenu';
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
      <TabMenu items={workItems}/>
      <FlexWrapper justify='space-around' alignI={'flex-start'}>
        <Work title={'Social network'}
              text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.'}
              src={socialImg}/>
        <Work title={'Timer'}
              text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim'}
              src={timerImg}/>
      </FlexWrapper>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
`
