import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// import logo from '../logo.svg';
// import './App.css';
import '../fonts/gilroy.css';

import CardDetail from './CardDetail';
import CardsList from './CardsList';

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}
* {
  box-sizing: inherit;
}
*:before {
  box-sizing: inherit;
}
*:after {
  box-sizing: inherit;
}
body {
  font-family: 'Gilroy', '-apple-system','BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial','sans-serif','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol', sans-serif;
  margin: 0;
  padding: 0;
}
code {
  font-family: 'Gilroy';
  font-weight: 800;
}

.App-header {
  background-color: #282c34;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  padding-left: 1rem;
}

.App-link {
  color: #61dafb;
}

a {
  color:inherit;
  text-decoration: none;
 }
`;

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <GlobalStyle />
          <div className="App">
            <header className="App-header">
              <Link to={`/`}>
                <p>Smoelenboek</p>
              </Link>
            </header>
            <Switch>
              <Route exact path="/" component={CardsList} />
              <Route path="/:id" component={CardDetail} />
            </Switch>
          </div>
        </>
      </Router>
    );
  }
}

export default App;