import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';

export const Slogan = () => {
  return (
    <StyledSlogan>
      <SectionTitle>I am available for freelance</SectionTitle>
      <Button>Hire me</Button>
    </StyledSlogan>
  );
};

const StyledSlogan = styled.section `
  background-color: antiquewhite;
  text-align: center;
`
