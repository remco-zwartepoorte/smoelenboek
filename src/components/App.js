import React from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import styled, {ThemeProvider} from 'styled-components'

import ScrollToTop from './ScrollToTop'
import GlobalStyle from './globalStyle'
import theme from './theme'
import samplePeople from '../utils/sample-data'
import '../fonts/gilroy.css'

import Header from './Header'
import Cards from './Cards'
import AddPerson from './AddPerson'
import CardDetail from './CardDetail'

const AppContainer = styled.div`
  max-width: 1280px;
  padding: 0 50px;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  @media screen and (max-width: ${props => props.theme.breakpoints.tablet}px) {
    padding: 0 10px;
  }
`

class App extends React.Component {
  state = {
    people: {},
  }

  componentDidMount = () => {
    const localStorageRef = localStorage.getItem('myData')
    if (localStorageRef) {
      this.setState({people: JSON.parse(localStorageRef)})
    } else {
      this.setState({
        people: samplePeople,
      })
    }
  }

  componentDidUpdate() {
    localStorage.setItem('myData', JSON.stringify(this.state.people))
  }

  addPerson = person => {
    const people = {...this.state.people}
    people[`${Date.now()}`] = person
    this.setState({people})
  }

  updatePerson = (key, updatedPerson) => {
    const people = {...this.state.people}
    people[key] = updatedPerson
    this.setState({people})
  }

  deletePerson = key => {
    const people = {...this.state.people}
    delete people[key]
    this.setState({people})
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <ScrollToTop>
            <GlobalStyle />
            <AppContainer>
              <Header />
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <Cards {...props} people={this.state.people} />
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
                  path="/:id"
                  render={props => (
                    <CardDetail
                      {...props}
                      people={this.state.people}
                      updatePerson={this.updatePerson}
                      deletePerson={this.deletePerson}
                    />
                  )}
                />
                />
              </Switch>
            </AppContainer>
          </ScrollToTop>
        </Router>
      </ThemeProvider>
    )
  }
}

export default App
