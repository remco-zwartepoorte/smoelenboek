import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Icon from './Icon';
import Background from './Background';

class CardDetail extends Component {
  state = {
    person: null,
    editMode: false,
    key: ''
  };

  componentDidMount = () => {
    const key = Object.keys(this.props.people).find(key => {
      if (this.props.people[key].name === this.props.match.params.name)
        return key;
    });
    this.setState({ key: key, person: this.props.people[key] });
  };

  handleChange = event => {
    const updatedPerson = {
      ...this.state.person,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.setState({ person: updatedPerson });
  };

  toggleEditMode = () => {
    this.setState({ editMode: !this.state.editMode });
  };

  savePerson = () => {
    this.props.updatePerson(this.state.key, this.state.person);
    this.toggleEditMode();
  };

  deletePerson = () => {
    this.props.deletePerson(this.state.key);
    this.props.history.push('/');
  };

  render() {
    if (this.state.person === null) {
      return <p>Loading...</p>;
    }
    if (this.state.person === undefined) {
      return <p>Loading...</p>;
    }

    return (
      <StyledDetails>
        <Nav>
          <Link to="/">
            <Icon name="chevron-left" height="25px" width="25px" color="#333" />
          </Link>
          <div>
            {this.state.editMode ? (
              <Button onClick={this.savePerson}>Save</Button>
            ) : (
              <Button onClick={this.toggleEditMode}>
                <Icon name="edit" height="25px" width="25px" color="#333" />
              </Button>
            )}
            <Button onClick={this.deletePerson}>
              <Icon name="delete" height="25px" width="25px" color="#333" />
            </Button>
          </div>
        </Nav>
        <Profile>
          <Image>
            <img
              src={`${this.state.person.image}.jpg`}
              alt={this.state.person.name}
            />
          </Image>
          <Info>
            {this.state.editMode ? (
              <>
                <input
                  type="text"
                  name="name"
                  onChange={this.handleChange}
                  value={this.state.person.name}
                />
                <input
                  type="text"
                  name="title"
                  onChange={this.handleChange}
                  value={this.state.person.title}
                />
                <input
                  type="text"
                  name="dateofbirth"
                  onChange={this.handleChange}
                  value={this.state.person.dateofbirth}
                />
                <textarea
                  type="text"
                  name="bio"
                  onChange={this.handleChange}
                  value={this.state.person.bio}
                />
              </>
            ) : (
              <>
                <h1>{this.state.person.name}<span>{` (${this.state.person.dateofbirth})`}</span></h1>
                <h2>{this.state.person.title}</h2>
                <p>{this.state.person.bio}</p>
              </>
            )}
          </Info>
          <Background />
        </Profile>
      </StyledDetails>
    );
  }
}

export default CardDetail;

const StyledDetails = styled.div`
  width: 100%;
  margin: 10px;
  padding: 10px;
  position: relative;
  height: 100%;
  z-index: 1;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
  position: relative;
`;

const Nav = styled.div`
  height: 100px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  position: absolute;
  z-index: 10;
  width: 100%;

  div {
    margin-right: 50px;
  }
  a {
    /* width: 50px; */
    margin-left: 25px;
    /* padding: 10px; */
  }
`;

const Info = styled.div`
  padding: 100px 50px 50px;
  flex: 1;

  p {
    line-height: 1.5;
    padding-top: 20px;
  }
  h1 span {
    font-size: 14px;
    font-weight: 300
  }
  h1 {
    margin-bottom: 0;
    font-size: 48px;
  }
  h2 {
    margin-top: 0;
    font-weight: 300;
  }

  input {
    display: block;
  }
`;

const Image = styled.figure`
  max-width: 50%;
  flex: 1;
  margin: 0;

  img {
    width: 100%;
    height: 100%;
    /* min-height: 50vh; */
    filter: grayscale(100%);
    clip-path: polygon(0% 0%, 97.58% 1.66%, 100% 98.36%, 0% 100%);
  }
`;

const Button = styled.button`
border: none;
background: none;
cursor: pointer;
margin-right: 10px;

:hover {
svg path {
  fill: red;
}
}
  /* display: inline-block;
  position: relative;
  border: none;
  font-family: 'Gilroy';
  font-weight: 800;
  font-size: 12px;
  text-decoration: none;
  color: #fff;
  background: none;
  white-space: nowrap;
  line-height: 40px;
  height: 100%;
  margin-left: 10px;

  cursor: pointer;
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    display: block;
    width: 100%;
    height: 0;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-bottom-style: solid;
    border-bottom-color: rgb(97, 154, 176);
    border-bottom-width: 40px; */
  }
`;
