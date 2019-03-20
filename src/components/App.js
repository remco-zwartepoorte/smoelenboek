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
  padding: 0;
  margin:0;
  /* background-color: #f9f9f6; */
  background-color: #333;
  color: #333;

}

.App {
  max-width: 1280px;
  padding: 0 50px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    padding: 0 10px;
  }
}

.App-header {
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  /* font-size: calc(10px + 2vmin); */
  padding-left: 1rem;
  color: white;
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
            name: 'Tamara Abels',
            image: '/images/beautiful-brunette-cute-774909',
            dateofbirth: '1988, 21, 07',
            title: 'Service designer',
            bio:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis purus sit amet volutpat. Nibh mauris cursus mattis molestie. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Lacus luctus accumsan tortor posuere ac ut consequat semper. Vel facilisis volutpat est velit egestas dui. Mauris commodo quis imperdiet massa. Mauris pharetra et ultrices neque ornare aenean euismod. Id aliquet risus feugiat in ante.'
          },
          person2: {
            name: 'Joost Wallenburg',
            image: '/images/adult-beard-boy-220453',
            dateofbirth: '21-09-1984',
            title: 'Front-end engineer',
            bio:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sit amet venenatis urna cursus eget nunc scelerisque viverra. Dignissim sodales ut eu sem integer vitae. Integer eget aliquet nibh praesent. Consectetur purus ut faucibus pulvinar elementum integer. Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Morbi enim nunc faucibus a pellentesque. Pharetra et ultrices neque ornare aenean. Amet luctus venenatis lectus magna fringilla.'
          },
          person3: {
            name: 'Daan Schuurmans',
            image: '/images/attractive-boy-casual-769690',
            dateofbirth: '24-05-1985',
            title: 'Interaction designer',
            bio:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec adipiscing tristique. Eget mauris pharetra et ultrices neque ornare aenean. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Nisi scelerisque eu ultrices vitae auctor eu augue. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Aliquam ut porttitor leo a diam sollicitudin. Arcu non odio euismod lacinia at quis. Amet justo donec enim diam vulputate.'
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
                <h1>Smoelenboek</h1>
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
