import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../components/icon/Icon';
import { FlexWrapper } from '../../components/FlexWrapper';

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction='column' alignI='center'>
        <Name>Svetlana</Name>
        <SocialList>
          <SocialItem>
            <SocialLink>
              <Icon iconId='inst' width={'21px'} />
            </SocialLink>
          </SocialItem>

          <SocialItem>
            <SocialLink>
              <Icon iconId='telegr' width={'21px'} />
            </SocialLink>
          </SocialItem>

          <SocialItem>
            <SocialLink>
              <Icon iconId='vk' width={'21px'} />
            </SocialLink>
          </SocialItem>

          <SocialItem>
            <SocialLink>
              <Icon iconId='in' width={'21px'} />
            </SocialLink>
          </SocialItem>
        </SocialList>
        <Copiright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copiright>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer `
  background-color: #e09f88;
  min-height: 20vh;
`

const Name = styled.h5 `
`

const SocialList = styled.ul `
  display: flex;
  gap: 10px;
  padding-left: 0;
`

const SocialItem = styled.li `
  list-style-type: none;
`

const SocialLink = styled.a `
`

const Copiright = styled.small `
`
