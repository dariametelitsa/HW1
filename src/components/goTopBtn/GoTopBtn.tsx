import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import  {animateScroll as scroll}  from "react-scroll";

export const GoTopBtn = () => {
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 200) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    })
  }, []);

  return (
    <>
      {showBtn && (
        <StyledGoTopBtn onClick={() => {scroll.scrollToTop()}}>
          <Icon iconId={'arrowUp'} width={'16'} height={'16'} viewBox={'0 0 16 16'}></Icon>
        </StyledGoTopBtn>
      )}
    </>
  );
};

const StyledGoTopBtn = styled.button `
  position: fixed;
  right: 30px;
  bottom: 30px;
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.3);
`
