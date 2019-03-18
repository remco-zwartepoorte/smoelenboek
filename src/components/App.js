import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// import logo from '../logo.svg';
// import './App.css';
import '../fonts/gilroy.css';

import CardDetail from './CardDetail';
import CardsList from './CardsList';
import AddPerson from './AddPerson';

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
  state = {
    people: {}
  };

  componentDidMount = () => {
    const localStorageRef = localStorage.getItem('myData');
    if (localStorageRef) {
      this.setState({ people: JSON.parse(localStorageRef) });
    } else {
      this.setState({
        people: {
          person1: {
            id: 1,
            name: 'Jeroen Zwartepoorte',
            dateofbirth: '21-07-1977',
            title: 'Front-end engineer',
            bio: 'Oudste'
          },
          person2: {
            id: 2,
            name: 'Remco Zwartepoorte',
            dateofbirth: '21-09-1979',
            title: 'Front-end engineer',
            bio: 'Middelste'
          },
          person3: {
            id: 3,
            name: 'Sander Zwartepoorte',
            dateofbirth: '24-05-1981',
            title: 'Designer',
            bio: 'Jongste'
          }
        }
      });
    }
  };

  componentDidUpdate() {
    localStorage.setItem('myData', JSON.stringify(this.state.people));
  }

  addPerson = person => {
    const people = { ...this.state.people };
    people[`person${Date.now()}`] = person;
    this.setState({ people });
  };

  updatePerson = (key, updatedPerson) => {
    const people = { ...this.state.people };
    people[key] = updatedPerson;
    this.setState({ people });
  };

  deletePerson = key => {
    const people = { ...this.state.people };
    delete people[key];
    this.setState({ people });
  };

  render() {
    return (
      <Router>
        <>
          <GlobalStyle />
          <div className="App">
            <header className="App-header">
              <Link to="/">
                <p>Smoelenboek</p>
              </Link>
            </header>
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <CardsList {...props} people={this.state.people} />
                )}
              />
              <Route
                path="/new"
                render={props => (
                  <AddPerson
                    {...props}
                    addPerson={this.addPerson}
                    people={this.state.people}
                  />
                )}
              />
              <Route
                path="/:name"
                render={props => (
                  <CardDetail
                    {...props}
                    people={this.state.people}
                    updatePerson={this.updatePerson}
                    deletePerson={this.deletePerson}
                  />
                )}
              />
            </Switch>
          </div>
        </>
      </Router>
    );
  }
}

export default App;
