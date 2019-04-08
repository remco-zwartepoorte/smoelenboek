import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  font-family: 'Gilroy', '-apple-system','BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial','sans-serif','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol', sans-serif;
  margin:  0;
  background-color: ${props => props.theme.colors.bgGrey};
  color: ${props => props.theme.colors.text};
}

a {
  color:inherit;
  text-decoration: none;
 }

label {
  font-weight: 800;
  margin-bottom: 4px;
  display: block;
}

input,
textarea {
  font-size: 16px;
  line-height: 1.5;
  font-family: 'Gilroy';
  font-weight: 300;
  display: inline-block;
  width: 100%;
  margin-bottom: 16px;
  padding: 10px;
  color: ${props => props.theme.colors.text};
  text-align: left;
  border: 1px solid #efefef;
  border-radius: 3px;

  :focus {
    border: 1px solid #b2b2b2;
    outline: none;
  }
}

textarea {
  height: 220px;
  resize: none;
}

button + button {
    margin-left: 10px;
  }
`

export default GlobalStyle
