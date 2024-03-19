import React from 'react';
import { Icon } from '../../../../components/icon/Icon';
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { S } from "../Skills_Styles";
import { IconWrapper } from "../../../../components/IconWrapper";

type SkillPropsType = {
  iconId: string,
  title: string,
  description: string,
}

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
  return (
    <S.Skill>
      <FlexWrapper direction={'column'} alignI={'center'}>
        <IconWrapper><Icon iconId={props.iconId}/></IconWrapper>
        <S.SkillTitle>{props.title}</S.SkillTitle>
        <S.SkillText>{props.description}</S.SkillText>
      </FlexWrapper>
    </S.Skill>
  );
};

