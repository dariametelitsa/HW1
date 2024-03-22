import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import styled from 'styled-components';
import { Icon } from '../../../components/icon/Icon';
import { Slider } from '../../../components/slider/Slider';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from "../../../components/Container";
import { IconWrapper } from "../../../components/IconWrapper";

export const Testimony: React.FC = () => {
  return (
    <StyledTestimony id={'testimony'}>
      <Container>
        <SectionTitle>Testimony</SectionTitle>
        <FlexWrapper direction='column' alignI='center'>
          <IconWrapper>
            <Icon iconId={'quote'}/>
          </IconWrapper>
          <Slider/>

        </FlexWrapper>
      </Container>
    </StyledTestimony>
  );
};

const StyledTestimony = styled.section`
  position: relative;

  ${IconWrapper} {
    margin: 40px 0 72px;
  }
`
