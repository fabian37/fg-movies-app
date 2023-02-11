import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
  }
  
  body {
    min-height: 100vh;
    font-size: 16px;
    background-color: #232323;
    color: honeydew;
    font-family: 'Rubik', sans-serif;
  }

  form,
  input,
  textarea,
  select,
  button,
  label {
    font-family: inherit;
    font-size: inherit;
    -webkit-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
    background-color: transparent;
    color: inherit;
    display: block;
    outline: none;
  }
`;

export default GlobalStyles;
