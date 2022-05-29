import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
//images
import Logo from '../../images/FilmCult Icono.png';
//style
import { Wrapper, Content, LogoImg } from './Header.styles';
// Context
import { Context } from '../../context';
//components
import Button from '../Button';

const Header = () => {
  const [user] = useContext(Context);

  return (
    <Wrapper>
      <Content>
        <Link to='/'>
          <LogoImg src={Logo} alt='logo' />
        </Link>
        {user ? (
          <span>Logged in as: {user.username}</span>
        ) : (
          <Link to='/login'>
            <Button text='Login' callback={()=> console.log('a')} color='--INFO'  />
          </Link>
        )}
      </Content>
    </Wrapper>
  );
};

export default Header;
