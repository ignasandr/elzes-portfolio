import React from 'react';
import MenuItem from '../../components/menu-item/menu-item.component';

import { HomeContainer } from './home.styles';


const Home = ({ sections, handleClick }) => (
    <HomeContainer>
        {sections.map(({id, ...otherProps}) => (
            <MenuItem key={id} id={id} {...otherProps} handleClick={handleClick} />
        ))}
    </HomeContainer>
)

export default Home;