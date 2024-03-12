import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import styled from 'styled-components';
import { Icon } from '../../../components/icon/Icon';
import { Slider } from '../../../components/slider/Slider';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { IconWrapper } from "../skills/skill/Skill";

export const Testimony = () => {
  return (
    <StyledTestimony>
      <SectionTitle>Testimony</SectionTitle>
      <FlexWrapper direction='column' alignI='center'>
        <IconWrapper>
          <Icon iconId={'quote'}/>
        </IconWrapper>
        <Slider/>

      </FlexWrapper>
    </StyledTestimony>
  );
};

const StyledTestimony = styled.section`

  ${IconWrapper} {
    margin: 40px 0 72px;
  }
`
