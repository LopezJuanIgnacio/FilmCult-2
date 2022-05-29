import { createGlobalStyle } from 'styled-components'
import background from './images/FondoConPochoclos.png'

export const GlobalStyle = createGlobalStyle`
  :root {
    --maxWidth: 1280px;
    --white: #fff;
    --lightGrey: #eee;
    --medGrey: #353535;
    --darkGrey: #1c1c1c;
    --principal: #531378;
    --accent: #B65FE9;
    --tone: #643C7B;
    --tone2: #5E2E7A;
    --secondary: #7A727F;
    --INFO: #5FA3E9;
    --afirmation: #5FE964;
    --ALERT: #FF5E5E;
    --warn: #FFEC5E;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
  }

  * {
    box-sizing: border-box;
    font-family: 'Abel', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background: url(${background});
    
    h1 {
      font-size: 2rem;
      font-weight: 600;
      color: var(--white);
    }

    h3 {
      font-size: 1.1rem;
      font-weight: 600;
    }

    p {
      font-size: 1rem;
      color: var(--white);
    }

    ::-webkit-scrollbar {
      width: 6px;
    }

    ::-webkit-scrollbar-track {
      background: transparent;        
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--principal); 
      border-radius: 20px;
    }

  }
`
