import React from 'react';
import { Icon } from '../../components/icon/Icon';
import { FlexWrapper } from '../../components/FlexWrapper';
import { S } from "./Footer_Styles";


const SocialItemData = [
  {
    iconID: 'inst'
  },
  {
    iconID: 'telegr'
  },
  {
    iconID: 'vk'
  },
  {
    iconID: 'in'
  },
]

export const Footer:React.FC = () => {
  return (
    <S.Footer>
      <FlexWrapper direction='column' alignI='center'>
        <S.Name>Svetlana</S.Name>
        <S.SocialList>
          {
            SocialItemData.map((s,index) => {
              return <li>
                <S.SocialLink>
                  <Icon iconId={s.iconID} width={'21px'} height={'21px'} />
                </S.SocialLink>
              </li>
            })
          }
        </S.SocialList>
        <S.Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</S.Copyright>
      </FlexWrapper>
    </S.Footer>
  );
};

