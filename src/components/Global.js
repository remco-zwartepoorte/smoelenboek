import { createGlobalStyle } from 'styled-components';

import { colors } from '../utils/styles';

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
  background-color: ${colors.bgGrey};
  color: ${colors.text};
}

a {
  color:inherit;
  text-decoration: none;
 }
`;

export default GlobalStyle;
