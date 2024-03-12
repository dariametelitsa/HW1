import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Contact = () => {
  return (
    <StyledContact>
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <StyledForm>
          <Field placeholder={'Name'} />
          <Field placeholder={'Subject'} />
          <Field placeholder={'Message'} as={'textarea'} />
          <Button type={'submit'}>Send message</Button>
        </StyledForm>
      </Container>
    </StyledContact>
  );
};

const StyledContact = styled.section`

`

const StyledForm = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;

  textarea {
    resize: none;
    height: 155px;
  }
`

const Field = styled.input`
  padding: 7px 15px;
  width: 100%;
  background-color: ${theme.colors.secondaryBg};
  border: 1px solid ${theme.colors.border};

  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  letter-spacing: 0.05em;
  font-size: 12px;
  color: ${theme.colors.font};

  &::placeholder {
    color: ${theme.colors.placeholder};
    text-transform: capitalize;
  }

  &:focus-visible {
    outline: 1px solid ${theme.colors.border};
  }
`
