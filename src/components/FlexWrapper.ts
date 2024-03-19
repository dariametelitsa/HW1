import styled from "styled-components";


type FlexWrapperPropsType = {
  direction?: string,
  justify?: string,
  alignI?: string,
  wrap?: boolean,
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  height: 100%;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "flex-start"};
  align-items: ${props => props.alignI || "stretch"};
  flex-wrap: ${props => props.wrap ? "wrap" : "nowrap"};
`
