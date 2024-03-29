import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { Link } from "../../../components/Link";
import { Button } from "../../../components/Button";
import { FlexWrapper } from "../../../components/FlexWrapper";

const Works = styled.section`
  position: relative;
  ${FlexWrapper} {
    gap: 60px;
  }
`

const Work = styled.div`
  background-color: ${theme.colors.secondaryBg};

  ${Link} {
    padding: 10px 0;

    & + ${Link} {
      margin-left: 20px;
    }
  }
}

@media ${theme.media.desktop} {
  max-width: 540px;
}
`

const ImageWrapper = styled.div`
  position: relative;

  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -40%);
    transition: ${theme.animations.transition};

    &::before {
      width: 100%;
      height: 100%;
    }
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
    opacity: 0;

    transition: ${theme.animations.transition};
  }

  &:hover {
    &::before {
      opacity: 100%;
    }

    ${Button} {
      opacity: 100%;
      transform: translate(-50%, -50%);
    }
  }

  @media ${theme.media.tablet} {
    &::before {
      opacity: 100%;
    }

    ${Button} {
      opacity: 100%;
    }
  }
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`

const Text = styled.p`
  margin: 14px 0 10px;
`

const Description = styled.div`
  padding: 25px 20px;
`

export const S = {
  Works,
  Work,
  ImageWrapper,
  Image,
  Text,
  Description,
}
