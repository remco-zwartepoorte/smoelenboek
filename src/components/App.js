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
            name: 'Laura Abels',
            image: '/images/beautiful-brunette-cute-774909',
            dateofbirth: '21-07-1988',
            title: 'Service designer',
            bio:
              'Free justice right pious of chaos transvaluation ascetic justice gains of against. Snare marvelous truth strong virtues superiority endless insofar. Christian right god justice law. Ascetic abstract ocean inexpedient christianity convictions noble mountains christian. Will prejudice ultimate of decrepit derive salvation of truth play sea moral reason. Disgust intentions grandeur deceptions pious sea virtues strong justice suicide pious disgust ultimate overcome. Law sexuality ocean spirit strong christianity transvaluation self victorious passion marvelous overcome revaluation. Intentions superiority passion derive endless horror noble grandeur faith strong. Noble passion salvation ultimate holiest reason inexpedient superiority god superiority virtues. Morality oneself play play eternal-return.'
          },
          person2: {
            name: 'Jeffrey Boot',
            image: '/images/adult-beard-boy-220453',
            dateofbirth: '21-09-1984',
            title: 'Front-end engineer',
            bio: 'Sexuality love chaos decrepit christian virtues. Endless spirit gains truth ocean truth convictions pinnacle mountains society superiority faith right sexuality. Disgust of ascetic moral inexpedient revaluation revaluation fearful holiest ultimate holiest mountains chaos dead. Inexpedient endless holiest will dead spirit society merciful holiest play law value. Ubermensch suicide spirit holiest self suicide oneself sexuality. Abstract oneself depths marvelous christianity suicide snare deceptions society suicide. Hope faith battle faith evil contradict ultimate. Ultimate strong abstract moral against pious inexpedient reason disgust value hatred faithful. Disgust depths ultimate gains chaos eternal-return christian abstract virtues faithful law right fearful. Chaos insofar god god.'
          },
          person3: {
            name: 'Daan Cremers',
            image: '/images/attractive-boy-casual-769690',
            dateofbirth: '24-05-1985',
            title: 'Interaction designer',
            bio: 'Suicide revaluation salvation prejudice depths of morality law. Justice strong ubermensch play philosophy hatred. Overcome derive snare inexpedient revaluation dead. Faith aversion disgust truth spirit contradict decrepit eternal-return revaluation decieve transvaluation. Value disgust abstract depths superiority inexpedient marvelous selfish zarathustra. War ubermensch enlightenment zarathustra against madness law battle. Prejudice passion marvelous marvelous law law law. Overcome justice strong overcome transvaluation faith will mountains victorious ideal ideal. Pious sexuality victorious virtues merciful overcome ultimate hatred marvelous right. Depths philosophy battle mountains chaos derive superiority selfish value holiest. Faithful love insofar intentions mountains gains derive war good sea derive. Selfish society law.'
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
