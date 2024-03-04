import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import styled from 'styled-components';
import { Icon } from '../../../components/icon/Icon';
import { Slider } from '../../../components/slider/Slider';
import { FlexWrapper } from '../../../components/FlexWrapper';

export const Testimony = () => {
  return (
    <StyledTestimony>
      <SectionTitle>Testimony</SectionTitle>
      <FlexWrapper direction='column' alignI='center'>
      <Icon iconId={'quote'} />
      <Slider />

      </FlexWrapper>
    </StyledTestimony>
  );
};

const StyledTestimony = styled.section`
  background-color: #e4e4e4;
`
