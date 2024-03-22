import React from 'react';
import styled from "styled-components";
import { Container } from "../components/Container";
import image from './6fd033f480a575f0a0f175bd3257c3c2.png';
import mask from './Vector.svg';

export const ClipPath = () => {
  return (
    <StyledClipPath>
      <Mask><BGImage></BGImage></Mask>
      <Container>
        <Text>
          <h1>lorem</h1>
          <p>Hello,  my name is Vahid Navazan</p>
          <p>Short text with details about you, what you do or your professional career. You can add more information on the about page.</p>
        </Text>
      </Container>
    </StyledClipPath>
  );
};

const StyledClipPath = styled.div`
  height: 100vh;
  position: relative;
  `

const BGImage = styled.div`
  position: relative;
  right: 0;
  bottom: 0;
  background-size: contain;
  height: 100%;
  background-image: url(${image});
  background-color: darkorange;
  background-repeat: no-repeat;
  background-position: right top;
`

const Mask = styled.div`
  overflow: hidden;
  position: absolute;
  right: 0;
  width: 53%;
  height: 100%;
  clip-path: path('M462.052 629C450.283 628.998 438.496 627.937 426.755 625.671C379.578 616.568 351.204 578.175 322.165 538.882C301.043 510.3 279.568 481.242 250.249 462.635C219.561 443.159 179.681 435.828 140.72 428.666C82.9642 418.049 27.2252 407.804 6.43091 358.913C-14.2556 310.276 18.6571 265.225 52.7536 218.553C74.8831 188.262 97.5112 157.289 106.308 124.209C116.209 86.9811 113.922 46.655 111.671 6.95477C111.54 4.63413 111.408 2.31562 111.279 0H723.153C722.974 10.4375 722.569 20.9783 722.161 31.5573C720.872 65.0465 719.567 98.9192 725.408 131.114C730.274 157.935 740.167 183.611 750 209.024V424.305C730.301 469.442 700.942 510.295 662.532 542.186C606.4 588.789 534.603 628.989 462.113 629C462.093 629 462.072 629 462.052 629Z');
`

const Text = styled.div`
  width: 40%;
    color: black;
`
