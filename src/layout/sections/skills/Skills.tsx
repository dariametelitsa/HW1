import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>My Skills</SectionTitle>
      <FlexWrapper as='ul' wrap justify='space-between'>
        <Skill iconId={'html'} title={'html'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'} />
        <Skill iconId={'css'} title={'css'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'} />
        <Skill iconId={'react'} title={'react'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'} />
        <Skill iconId={'ts'} title={'typescript'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'} />
        <Skill iconId={'style'} title={'styled components'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'} />
        <Skill iconId={'web'} title={'web design'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'} />
      </FlexWrapper>
    </StyledSkills>
  );
};


const StyledSkills = styled.section`
  min-height: 100vh;
  background-color: bisque;

`