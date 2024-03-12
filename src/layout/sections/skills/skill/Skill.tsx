import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';
import { FlexWrapper } from "../../../../components/FlexWrapper";

type SkillPropsType = {
  iconId: string,
  title: string,
  description: string,
}

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <FlexWrapper direction={'column'} alignI={'center'}>
        <IconWrapper><Icon iconId={props.iconId}/></IconWrapper>
        <SkillTitle>{props.title}</SkillTitle>
        <SkillText>{props.description}</SkillText>
      </FlexWrapper>
    </StyledSkill>
  );
};

const StyledSkill = styled.li`
  width: 380px;
  padding: 62px 20px 40px;
`

const SkillTitle = styled.h3`
  margin: 70px 0 15px;
  text-transform: uppercase;
`

const SkillText = styled.p`
  text-align: center;
`

const IconWrapper = styled.div `
  position: relative;
  font-size: 0;

  &::before {
    content: '';
    position: absolute;
    width: 80px;
    height: 80px;
    background-color: rgba(255, 255, 255, 0.1);

    transform: translate(-50%, -50%) rotate(45deg);
    left: 50%;
    top: 50%;
  }

`
