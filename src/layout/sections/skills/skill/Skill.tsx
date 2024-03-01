import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';

type SkillPropsType = {
  iconId: string,
  title: string,
  description: string,
}

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
          <Icon iconId={props.iconId}/>
          <SkillTitle>{props.title}</SkillTitle>
          <SkillText>{props.description}</SkillText>
    </StyledSkill>
  );
};

const StyledSkill = styled.li`
  width: 33%;
  padding: 20px;
  list-style-type: none;
`

const SkillTitle = styled.div`
  
`

const SkillText = styled.div`
  
`