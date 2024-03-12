import React from 'react';
import styled from 'styled-components';
import { Link } from "../../../../components/Link";

type WorkPropsType = {
  title: string,
  text: string,
  src: string,
}

export const Work = (props: WorkPropsType) => {
  return (
    <StyledWork>
      <Image src={props.src} alt='' />
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
      <Link href={'#1'}>Demo</Link>
      <Link href={'#2'}>Code</Link>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  width: 100%;
  max-width: 540px;
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`

const Title = styled.h3`

`

const Text = styled.p`

`
