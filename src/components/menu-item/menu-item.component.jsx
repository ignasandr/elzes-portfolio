import React from 'react';

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
} from './menu-item.styles';

const MenuItem = ({ name, photos, route, id, handleClick }) => {
  return <MenuItemContainer to={`/${route}`}
                            onClick={() => handleClick(id)}
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

export default MenuItem;