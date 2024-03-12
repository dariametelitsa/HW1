import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Slogan = () => {
  return (
    <StyledSlogan>
      <Container>
        <FlexWrapper direction={'column'} alignI={'center'}>
          <SectionTitle>I am available for freelance</SectionTitle>
          <Button>Hire me</Button>
        </FlexWrapper>
      </Container>
    </StyledSlogan>
  );
};

const StyledSlogan = styled.section `
`
