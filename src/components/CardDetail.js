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
            {/* <Button onClick={this.deletePerson}>
              <Icon name="delete" height="25px" width="25px" color="#333" />
            </Button> */}
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
              <Edit>
                <label htmlFor="name">Name</label>

                <input
                  type="text"
                  name="name"
                  onChange={this.handleChange}
                  value={this.state.person.name}
                />
                <label htmlFor="dateofbirth">Date of birth</label>
                <input
                  type="text"
                  name="dateofbirth"
                  onChange={this.handleChange}
                  value={this.state.person.dateofbirth}
                />
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  name="title"
                  onChange={this.handleChange}
                  value={this.state.person.title}
                />
                <label htmlFor="bio">Bio</label>
                <textarea
                  type="text"
                  name="bio"
                  onChange={this.handleChange}
                  value={this.state.person.bio}
                />
              </Edit>
            ) : (
              <>
                <h1>
                  {this.state.person.name}
                  <span>{` (${this.state.person.dateofbirth})`}</span>
                </h1>
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
  /* margin: 10px; */
  /* padding: 10px; */
  position: relative;
  height: 100%;
  z-index: 1;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
  position: relative;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
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

  @media screen and (max-width: 768px) {
    margin-top: 60vh;
  }

  div {
    margin-right: 35px;
    @media screen and (max-width: 768px) {
      margin-right: 10px;
    }
  }
  a {
    /* width: 50px; */
    margin-left: 25px;
    /* padding: 10px; */
  }
`;

const Info = styled.div`
  padding: 80px 50px 50px;
  flex: 1;

  @media screen and (max-width: 768px) {
    padding: 50px 25px 50px;
  }

  p {
    line-height: 1.5;
    padding-top: 20px;
  }
  h1 span {
    font-size: 14px;
    font-weight: 300;
  }
  h1 {
    margin-bottom: 0;
    font-size: 48px;
  }
  h2 {
    margin-top: 0;
    font-weight: 300;
  }
`;

const Edit = styled.div`
  label {
    font-weight: 800;
    margin-bottom: 4px;
    display: block;
  }

  input,
  textarea {
    font-size: 16px;
    /* line-height: 1.23543; */
    font-family: 'Gilroy';
    font-weight: 300;
    display: inline-block;
    box-sizing: border-box;
    vertical-align: top;
    width: 100%;
    margin-bottom: 16px;
    padding: 10px;
    color: #333;
    text-align: left;
    border: 1px solid #d6d6d6;
    border-radius: 4px;
  }

  textarea {
    height: 220px;
    resize: none;
  }
`;

const Image = styled.figure`
  max-width: 50%;
  flex: 1;
  margin: 0;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    /* min-height: 60vh; */
    /* height: 100%; */
    /* height: 50vh; */
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* min-height: 50vh; */
    filter: grayscale(100%);
    clip-path: polygon(0% 0%, 97.58% 1.66%, 98.49% 98.36%, 0% 100%);

    @media screen and (max-width: 768px) {
      height: 60vh;
    }
  }
`;

const Button = styled.button`
border: none;
cursor: pointer;
margin-right: 10px;
background: none;
/* background-color: rgb(97, 154, 176);
width: 3.05882rem;
height: 3.05882rem;
border-radius: 3.05882rem;
font-size: 53px;
font-weight: normal;
line-height: 3.05882rem;
text-align: center; */

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
