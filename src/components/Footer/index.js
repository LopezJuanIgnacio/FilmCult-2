import React from 'react'
import { Link } from 'react-router-dom'
//images
import Logo from '../../images/FilmCult Icono.png'
//styles
import { Wrapper, Content, LogoImg } from './Footer.styles'

const Footer = () => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={Logo} alt="logo" />
        </Link>
        <h1>Creado Por Juan Ignacio Lopez</h1>
      </Content>
    </Wrapper>
  )
}

export default Footer
