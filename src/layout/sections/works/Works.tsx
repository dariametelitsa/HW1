import React, { useState } from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { TabMenu, TabsStatusType } from './menu/TabMenu';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from './work/Work';
import socialImg from './../../../assets/images/social.png';
import timerImg from './../../../assets/images/timer.png';
import { Container } from "../../../components/Container";
import { S } from "./Works_Styles";
import { AnimatePresence, motion } from "framer-motion"


const tabsItems: Array<{ status: TabsStatusType, title: string, link: string }> = [
  {
    title: 'All',
    status: 'all',
    link: '#1',
  },
  {
    title: 'Landing page',
    status: 'landing',
    link: '#2',
  },
  {
    title: 'React',
    status: 'react',
    link: '#3',
  },
  {
    title: 'SPA',
    status: 'spa',
    link: '#4',
  },
]

const worksData = [
  {
    title: 'Social network',
    src: socialImg,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim',
    type: 'spa',
    id: 1
  },
  {
    title: 'Timer',
    src: timerImg,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim',
    type: 'react',
    id: 2
  },
  {
    title: 'Social network',
    src: socialImg,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim',
    type: 'spa',
    id: 3
  },
  {
    title: 'Timer',
    src: timerImg,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim',
    type: 'react',
    id: 4
  },
  {
    title: 'Social network',
    src: socialImg,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim',
    type: 'spa',
    id: 5
  },
  {
    title: 'Timer',
    src: timerImg,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim',
    type: 'landing',
    id: 6
  },
]
export const Works: React.FC = () => {
  const [currentFilterStatus, setCurrentFilterStatus] = useState('all');
  let filteredWorks = worksData;

  if (currentFilterStatus === 'landing') {
    filteredWorks = worksData.filter(work => work.type === 'landing');
  }
  if (currentFilterStatus === 'react') {
    filteredWorks = worksData.filter(work => work.type === 'react');
  }
  if (currentFilterStatus === 'spa') {
    filteredWorks = worksData.filter(work => work.type === 'spa');
  }

  function changeFilterStatus(value: TabsStatusType) {
    setCurrentFilterStatus(value);
  }

  return (
    <S.Works id={'works'}>
      <Container>
        <SectionTitle>My works</SectionTitle>
        <TabMenu tabsItems={tabsItems}
                 changeFilterStatus={changeFilterStatus}
                 currentFilterStatus={currentFilterStatus}/>
        <FlexWrapper justify='space-between' alignI={'flex-start'} wrap>
          <AnimatePresence>
            {
              filteredWorks.map((w) => {
                return (
                  <motion.div style={{width: '400px', flexGrow: 1}}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key={w.id}
                  >

                    <Work title={w.title}
                          text={w.text}
                          src={w.src}
                          key={w.id}
                    />
                  </motion.div>
                )
              })
            }
          </AnimatePresence>
        </FlexWrapper>
      </Container>
    </S.Works>
  );
};
