import React from 'react';
import { Link } from "../../../../components/Link";
import { Button } from "../../../../components/Button";
import { S } from "../Works_Styles";

type WorkPropsType = {
  title: string,
  text: string,
  src: string,
}

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
  return (
    <S.Work>

      <S.ImageWrapper>
        <S.Image src={props.src} alt=''/>
        <Button>View project</Button>
      </S.ImageWrapper>

      <S.Description>
        <h3>{props.title}</h3>
        <S.Text>{props.text}</S.Text>
        <Link href={'#1'}>Demo</Link>
        <Link href={'#2'}>Code</Link>
      </S.Description>

    </S.Work>
  );
};

