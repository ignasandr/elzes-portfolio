import React from 'react';


import {
  HeaderContainer,
//   LogoContainer,
  OptionsContainer,
  OptionLink
} from './header.styles';

const Header = ({ sections, handleClick }) => (
    <HeaderContainer>
        {/* <LogoContainer>
        </LogoContainer> */}
        <OptionsContainer>
            {sections.map(({id, active, name}) => (
              <OptionLink to="/"
                          key={id}
                          active={active ? 1 : 0}
                          onClick={() => handleClick(id)}>{name}
              </OptionLink>
            ))}
        </OptionsContainer>
    </HeaderContainer>
)

export default Header;