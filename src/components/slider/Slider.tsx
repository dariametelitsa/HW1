import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { S } from "./Slider_Styles";
import './../../styles/slider.css';

type SlidePropsType = {
  text: string,
  userName: string
}

const Slide: React.FC<SlidePropsType> = (props: SlidePropsType) => {
  return (<S.Slide>
    <p>{props.text}</p>
    <S.Name>@{props.userName}</S.Name>
  </S.Slide>)
}

const items = [
  <Slide userName={'dolores'}
         text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} />,
  <Slide userName={'petr moroz'}
         text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} />,
  <Slide userName={'marilyn'}
         text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} />
];

export const Slider: React.FC = () => (
  <S.Slider>
    <AliceCarousel
      mouseTracking
      items={items}/>
  </S.Slider>

);


