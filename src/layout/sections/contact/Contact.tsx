import React, { ElementRef, useRef } from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';
import { Container } from "../../../components/Container";
import { S } from "./Contacts_Styles";
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
      e.preventDefault();

      if(!form.current) return;

      emailjs
        .sendForm('service_ar3pofc', 'template_rod40hf', form.current, {
          publicKey: 'sS34hYrIYUOit2SD4',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
      e.target.reset();
    };

  return (
    <S.Contact id={'contact'}>
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <S.Form ref={form} onSubmit={sendEmail}>
          <S.Field placeholder={'Name'} name={'user_name'} />
          <S.Field placeholder={'Subject'} name={'subject'} />
          <S.Field placeholder={'Email'} name={'email'} />
          <S.Field placeholder={'Message'} as={'textarea'} name={'message'} />
          <Button type={'submit'}>Send message</Button>
        </S.Form>
      </Container>
    </S.Contact>
  );
};
