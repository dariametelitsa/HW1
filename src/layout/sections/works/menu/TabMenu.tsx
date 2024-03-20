import React from 'react';
import styled from 'styled-components';
import { Link } from "../../../../components/Link";

export type TabsStatusType = 'all' | 'landing' | 'react' | 'spa';

type TabMenuPropsType = {
  tabsItems: Array<{ status: TabsStatusType, title: string }>,
  changeFilterStatus: (value: TabsStatusType) => void,
  currentFilterStatus: string,
}

export const TabMenu = (props: TabMenuPropsType) => {
  return (
    <StyledTabMenu>
        <ul>
          {
            props.tabsItems.map((item:{ status: 'all' | 'landing' | 'react' | 'spa', title: string }, index:number) => {
              return (<li key={index}>
                <Link active={props.currentFilterStatus === item.status} as={'button'} onClick={() => {props.changeFilterStatus(item.status)}}>
                  {item.title}
                </Link>
              </li>)
            })
          }
        </ul>
      </StyledTabMenu>
  );
};

const StyledTabMenu = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    max-width: 352px;
    width: 100%;
    margin: 0 auto 40px;
  }
`


