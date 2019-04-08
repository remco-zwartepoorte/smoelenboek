// import React from 'react'
import styled from 'styled-components'

// const Button = props => <StyledButton {...props}>{props.children}</StyledButton>

const Button = styled.button`
  position: relative;
  display: inline-block;
  padding: 0.5rem 1rem;
  cursor: pointer;
  width: auto;
  font-size: 14px;
  font-weight: 800;
  border: none;
  transition: all 0.1s linear;
  vertical-align: middle;
  text-align: center;
  line-height: 1.5;
  border-radius: ${props => props.theme.radius};
  background-color: ${props => props.theme.colors.button.white};
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.colors.button.greyLight};
  color: ${props => props.theme.colors.button.grey};

  &:hover {
    border-color: ${props =>
      props.disabled ? null : props.theme.colors.button.grey};
    color: ${props =>
      props.disabled ? null : props.theme.colors.button.greyDark};
  }

  &:disabled {
    opacity: 0.25;
    cursor: auto;
  }
`

export const ButtonPrimary = styled(Button)`
  background-color: ${props => props.theme.colors.button.primary};
  border-color: ${props => props.theme.colors.button.primary};
  color: ${props => props.theme.colors.button.white};

  &:hover {
    background-color: ${props =>
      props.disabled ? null : props.theme.colors.button.primaryDark};
    border-color: ${props =>
      props.disabled ? null : props.theme.colors.button.primaryDark};
    color: ${props =>
      props.disabled ? null : props.theme.colors.button.white};
  }
`

export const ButtonOutline = styled(Button)`
  background-color: ${props => props.theme.colors.button.white};
  border-color: ${props => props.theme.colors.button.primaryLight};
  color: ${props => props.theme.colors.button.primary};

  &:hover {
    border-color: ${props =>
      props.disabled ? null : props.theme.colors.button.primary};
    color: ${props =>
      props.disabled ? null : props.theme.colors.button.primaryDark};
  }
`

export const ButtonMinimal = styled(Button)`
  background-color: ${props => props.theme.colors.button.white};
  border-color: ${props => props.theme.colors.button.white};
  color: ${props => props.theme.colors.button.primary};

  &:hover {
    border-color: ${props =>
      props.disabled ? null : props.theme.colors.button.white};
    color: ${props =>
      props.disabled ? null : props.theme.colors.button.primaryDark};
  }
`
export const ButtonDanger = styled(Button)`
  background-color: ${props => props.theme.colors.button.danger};
  border-color: ${props => props.theme.colors.button.danger};
  color: ${props => props.theme.colors.button.white};

  &:hover {
    background-color: ${props =>
      props.disabled ? null : props.theme.colors.button.dangerDark};
    border-color: ${props =>
      props.disabled ? null : props.theme.colors.button.dangerDark};
    color: ${props =>
      props.disabled ? null : props.theme.colors.button.white};
  }
`

export default Button
