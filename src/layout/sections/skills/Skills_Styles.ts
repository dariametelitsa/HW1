import { theme } from "../../../styles/Theme";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";

const Skills = styled.section`
  position: relative;

  & ${FlexWrapper} {
    justify-content: space-between;

    @media ${theme.media.tablet} {
      justify-content: center;
    }
  }
`

const Skill = styled.li`
  width: 330px;
  flex-grow: 1;
  padding: 42px 20px 52px;

  @media ${theme.media.mobile} {
    padding: 62px 0 40px;
  }
`

const SkillTitle = styled.h3`
  margin: 70px 0 15px;
  text-transform: uppercase;
`

const SkillText = styled.p`
  text-align: center;
`

export const S = {
  Skills,
  Skill,
  SkillTitle,
  SkillText,
}
