import React from 'react';
import photo from '../../../assets/images/photo.jpeg'
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper alignI={'center'} justify={'space-between'}>
          <div>
            <SmallText>Hi There</SmallText>
            <Name>I am <span>Svetlana Dyablo</span></Name>
            <MainTitle>A Web Developer.</MainTitle>
          </div>

          <PhotoWrapper>
            <Photo src={photo} alt="" />
          </PhotoWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`

const SmallText = styled.span`
  font-size: 14px;
  font-weight: 400;
`

const MainTitle = styled.h1`
  font-size: 27px;
  font-weight: 400;
`
const Name = styled.h2`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 700;
  font-size: 50px;
  margin: 10px 0;

  span {
    position: relative;
    z-index: 0;

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${theme.colors.accent};
      z-index: -1;
    }
  }
`

const PhotoWrapper = styled.div `
  position: relative;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    top: -24px;
    left: 24px;
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};
    z-index: -1;
  }
`
