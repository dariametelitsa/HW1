import React from 'react';
import photo from '../../../assets/images/photo.jpeg'
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from "../../../components/Container";
import { S } from './Main_Styles';
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

export const Main: React.FC = () => {
  return (
    <S.Main id={'home'}>
      <Container>
        <FlexWrapper alignI={'center'} justify={'space-around'} wrap>
          <div>
            <S.SmallText>Hi There</S.SmallText>
            <S.Name>I am <span>Svetlana Dyablo</span></S.Name>
            <S.MainTitle>
              <Typewriter
                options={{
                  strings: ['A Web Developer.', 'A Web Designer.'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </S.MainTitle>
            <h1>A Web Developer.</h1>
          </div>

          <Tilt>
            <S.PhotoWrapper>
              <S.Photo src={photo} alt="" />
            </S.PhotoWrapper>
          </Tilt>

        </FlexWrapper>
      </Container>
    </S.Main>
  );
};


