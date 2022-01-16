import React from 'react';

import { Content, LogoImg, FavLogoImg, Wrapper } from './Header.style';

import NASALogo from '../../images/nasa-logo.svg';
import FavLogo from '../../images/fav.jpeg';
import { Link } from 'react-router-dom';

const Header = () => (
    <Wrapper>
        <Content>
            <Link to="/">
                <LogoImg src={NASALogo} alt='nasa-logo' />
            </Link>
            <Link to="/favourites">
                <FavLogoImg src={FavLogo} alt='fav-logo' />
            </Link>
        </Content>
    </Wrapper>
);

export default Header;