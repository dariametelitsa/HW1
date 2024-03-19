import React from 'react';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';
import { Container } from "../../../components/Container";
import { S } from "./Skills_Styles";

export const Skills = () => {
  return (
    <S.Skills>
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <FlexWrapper as='ul' wrap justify='space-between'>
          {
            skillData.map((s, index) => {
              return <Skill iconId={s.iconId} key={index}
                            title={s.title}
                            description={s.description} />
            })
          }
        </FlexWrapper>
      </Container>
    </S.Skills>
  );
};

const skillData = [
  {
    iconId: 'html',
    title: 'html5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
  },
  {
    iconId: 'css',
    title: 'css',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
  },
  {
    iconId: 'react',
    title: 'react',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
  },
  {
    iconId: 'ts',
    title: 'typescript',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
  },
  {
    iconId: 'style',
    title: 'styled components',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
  },
  {
    iconId: 'web',
    title: 'web design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
  },
]
