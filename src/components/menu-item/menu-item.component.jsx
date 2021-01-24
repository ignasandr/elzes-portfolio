import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
} from './menu-item.styles';

const MenuItem = ({ name, photos, history, route, match, id, handleClick }) => {
  return <MenuItemContainer
    onClick={() => {
        history.push(`${match.url}${route}`);
        handleClick(id);
        }}
  >
    <BackgroundImageContainer
      className='background-image'
      imageUrl={photos[0]["src"]}
    />
    <ContentContainer className='content'>
      <ContentTitle>{name}</ContentTitle>
    </ContentContainer>
  </MenuItemContainer>
};

export default withRouter(MenuItem);