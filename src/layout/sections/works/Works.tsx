import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { TabMenu } from './menu/TabMenu';
import { MenuData } from '../../header/Header';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from './work/Work';
import socialImg from './../../../assets/images/social.png';
import timerImg from './../../../assets/images/timer.png';
import { Container } from "../../../components/Container";
import { S } from "./Works_Styles";

const workMenu: Array<MenuData> = [
  {
    title: 'All',
    link: '#1',
  },
  {
    title: 'Landing page',
    link: '#2',
  },
  {
    title: 'React',
    link: '#3',
  },
  {
    title: 'SPA',
    link: '#4',
  },
]

const workData = [
  {
    title: 'Social network',
    src: socialImg,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim',
  },
  {
    title: 'Timer',
    src: timerImg,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim',
  },
]

export const Works: React.FC = () => {
  return (
    <S.Works>
      <Container>
        <SectionTitle>My works</SectionTitle>
        <TabMenu items={workMenu}/>
        <FlexWrapper justify='space-between' alignI={'flex-start'} wrap>
          {
            workData.map((w) => {
              return <Work title={w.title}
                           text={w.text}
                           src={w.src}/>
            })
          }
        </FlexWrapper>
      </Container>
    </S.Works>
  );
};
