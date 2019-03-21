import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiEdit, FiArrowLeft, FiGift } from 'react-icons/fi';
import Moment from 'react-moment';
import 'moment/locale/nl';

import Background from './Background';

class CardDetail extends Component {
  state = {
    editMode: false,
    key: '',
    loading: true,
    person: null
  };

  componentDidMount = () => {
    this.timer = setTimeout(
      () =>
        this.setState(
          prevState => ({
            key: this.props.match.params.id,
            person: this.props.people[this.props.match.params.id],
            loading: false
          }),
          console.log('state updated'),
          console.log(this.props.people[this.props.match.params.id])
        ),
      1
    );
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
    console.log('render');
    const { loading } = this.state;
    return (
      <StyledDetails>
        {loading ? (
          <p>loading</p>
        ) : (
          <Profile>
            <Image>
              <NavLeft>
                <StyledLink to="/">
                  <FiArrowLeft />
                </StyledLink>
              </NavLeft>
              <img
                // src={`${this.state.person.image}.jpg`}
                src={`${
                  this.props.people[this.props.match.params.id].image
                }.jpg`}
                // alt={this.state.person.name}
                alt={this.props.people[this.props.match.params.id].name}
              />
            </Image>
            <Info>
              <NavRight>
                {!this.state.editMode && (
                  <IconButton onClick={this.toggleEditMode}>
                    <FiEdit />
                  </IconButton>
                )}
              </NavRight>
              <Wrapper>
                {this.state.editMode ? (
                  <EditForm onSubmit={this.savePerson}>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      onChange={this.handleChange}
                      value={this.state.person.name}
                      required
                    />
                    <label htmlFor="dateofbirth">Date of birth</label>
                    <input
                      type="date"
                      name="dateofbirth"
                      onChange={this.handleChange}
                      value={this.state.person.dateofbirth}
                      pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                      required
                    />
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      name="title"
                      onChange={this.handleChange}
                      value={this.state.person.title}
                      required
                    />
                    <label htmlFor="bio">Bio</label>
                    <textarea
                      type="text"
                      name="bio"
                      onChange={this.handleChange}
                      value={this.state.person.bio}
                    />
                    <ButtonGroup>
                      <div>
                        <PrimaryButton type="submit">Save</PrimaryButton>
                        {/* <SecondaryButton onClick={this.savePerson}>
                        Cancel
                      </SecondaryButton> */}
                      </div>
                      <div>
                        <TertiaryButton onClick={this.deletePerson}>
                          Delete Profile
                        </TertiaryButton>
                      </div>
                    </ButtonGroup>
                  </EditForm>
                ) : (
                  <>
                    <h1>{this.state.person.name}</h1>
                    <h2>{this.state.person.title}</h2>
                    <span>
                      <FiGift />
                      <Moment
                        locale="nl"
                        format="DD MMMM"
                        date={new Date(this.state.person.dateofbirth)}
                      />
                    </span>
                    <p>{this.state.person.bio}</p>
                  </>
                )}
              </Wrapper>
            </Info>
            <Background />
          </Profile>
        )}
      </StyledDetails>
    );
  }
}

export default CardDetail;

const StyledDetails = styled.div`
  width: 100%;
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
  position: absolute;
  z-index: 10;
`;

const NavLeft = styled(Nav)`
  left: 25px;
  top: 51px;
  opacity: 0;
  transition: 250ms opacity linear;
`;

const NavRight = styled(Nav)`
  right: 50px;
  top: 63px;

  @media screen and (max-width: 768px) {
    right: 25px;
    top: 20px;
  }
`;

const Info = styled.div`
  flex: 1;
  position: relative;

  p {
    line-height: 1.5;
    padding-top: 20px;
  }
  span {
    font-size: 14px;
    font-weight: 300;
    line-height: 1;
    display: inline-flex;
    align-items: center;

    svg {
      margin-right: 6px;
      color: #9ea0a5;
    }
  }
  h1 {
    margin: 0;
    font-size: 48px;
  }
  h2 {
    margin-top: 0;
    font-weight: 300;
  }
`;

const Wrapper = styled.div`
  padding: 80px 50px 50px;

  @media screen and (max-width: 768px) {
    padding: 40px 25px 60px;
  }
`;

export const EditForm = styled.form`
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
    color: #333;
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
`;

const Image = styled.figure`
  max-width: 50%;
  flex: 1;
  margin: 0;
  position: relative;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }

  :hover {
    > div {
      opacity: 1;
    }
  }

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%);
    clip-path: polygon(0% 0%, 97.58% 1.66%, 98.49% 98.36%, 0% 100%);

    @media screen and (max-width: 768px) {
      height: 70vw;
    }
  }
`;

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  position: relative;
  width: 3rem;
  height: 3rem;
  padding: 0;
  background-color: rgba(34, 34, 34, 0.2);
  border-radius: 50%;
  transition: 250ms background-color linear, 250ms color linear,
    250ms opacity linear;

  :hover {
    background-color: rgba(34, 34, 34, 0.5);
    svg {
      color: #fff;
    }
  }

  svg {
    height: 1em;
    width: 1em;
    transition: 0.2s;
    color: rgba(255, 255, 255, 0.8);
  }
`;

const IconButton = styled.a`
  border: none;
  cursor: pointer;
  background: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;

  svg {
    height: 1em;
    width: 1em;
    transition: 0.2s;
    color: #333;

    :hover {
      color: #619ab0;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const Button = styled.button`
  cursor: pointer;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  position: relative;
  text-align: center;
  width: auto;
  font-size: 14px;
  font-weight: 800;
`;

export const PrimaryButton = styled(Button)`
  background-color: #619ab0;
  border: 1px solid #619ab0;
  color: #fff;
`;

// const SecondaryButton = styled(Button)`
//   background-color: #fff;
//   border: 1px solid #d3e5eb;
//   color: #619ab0;
//   margin-left: 10px;
// `;

const TertiaryButton = styled(Button)`
  border: none;
  background-color: #fff;
  color: #619ab0;
  margin-left: 10px;
`;
