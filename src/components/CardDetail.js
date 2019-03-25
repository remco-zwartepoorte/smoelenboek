import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiEdit, FiArrowLeft, FiGift } from 'react-icons/fi';
import Moment from 'react-moment';
import 'moment/locale/nl';

import { PrimaryButton, TertiaryButton } from '../shared/buttons';
import { colors, breakpoints, polygons } from '../utils/styles';

const StyledCardDetails = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
  position: relative;
  clip-path: ${polygons.detail};

  @media screen and (max-width: ${breakpoints.tablet}px) {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  max-width: 50%;
  flex: 1;
  margin: 0;

  @media screen and (max-width: ${breakpoints.tablet}px) {
    max-width: 100%;
    max-height: 50vh;
  }
`;

const BackLink = styled(Link)`
  position: absolute;
  z-index: 10;
  left: 25px;
  top: 51px;
  opacity: 0;
  transition: 250ms opacity linear;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
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

  ${ImageWrapper}:hover & {
    opacity: 1;
  }

  svg {
    height: 1em;
    width: 1em;
    transition: 0.2s;
    color: rgba(255, 255, 255, 0.8);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);

  @media screen and (max-width: ${breakpoints.tablet}px) {
    max-height: 50vh;
  }
`;

const InfoWrapper = styled.div`
  flex: 1;
  position: relative;
`;

const Info = styled.div`
  padding: 80px 50px 50px;
  background-color: ${colors.bgWhite};
  height: 100%;

  @media screen and (max-width: ${breakpoints.tablet}px) {
    padding: 40px 25px 60px;
  }

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
      color: ${colors.textLighter};
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

const IconButton = styled.a`
  border: none;
  cursor: pointer;
  background: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  position: absolute;
  z-index: 10;
  right: 50px;
  top: 63px;

  @media screen and (max-width: ${breakpoints.tablet}px) {
    right: 25px;
    top: 20px;
  }

  svg {
    height: 1em;
    width: 1em;
    transition: 0.2s;
    color: ${colors.text};

    :hover {
      color: ${colors.primary};
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

class CardDetail extends Component {
  state = {
    editMode: false,
    key: '',
    isLoading: true,
    person: null
  };

  componentDidMount = () => {
    this.setPerson();
  };

  componentDidUpdate() {
    if (
      !this.state.person &&
      this.state.person !== this.props.people[this.props.match.params.id]
    ) {
      this.setPerson();
    }
  }

  setPerson = () => {
    if (this.props.people[this.props.match.params.id]) {
      this.setState({
        key: this.props.match.params.id,
        person: this.props.people[this.props.match.params.id],
        isLoading: false
      });
    }
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

  savePerson = event => {
    event.preventDefault();
    this.props.updatePerson(this.state.key, this.state.person);
    this.toggleEditMode();
  };

  deletePerson = () => {
    this.props.deletePerson(this.state.key);
    this.props.history.push('/');
  };

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <StyledCardDetails>
        <ImageWrapper>
          <BackLink to="/">
            <FiArrowLeft />
          </BackLink>
          <Image
            src={`${this.state.person.image}.jpg`}
            alt={this.state.person.name}
          />
        </ImageWrapper>
        <InfoWrapper>
          {!this.state.editMode && (
            <IconButton onClick={this.toggleEditMode}>
              <FiEdit />
            </IconButton>
          )}
          <Info>
            {this.state.editMode ? (
              <form onSubmit={this.savePerson}>
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
                  <PrimaryButton type="submit">Save</PrimaryButton>
                  <TertiaryButton onClick={this.deletePerson}>
                    Delete Profile
                  </TertiaryButton>
                </ButtonGroup>
              </form>
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
          </Info>
        </InfoWrapper>
        )}
      </StyledCardDetails>
    );
  }
}

export default CardDetail;
