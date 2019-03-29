import styled from 'styled-components'
import {colors} from '../utils/styles'

const Button = styled.button`
  cursor: pointer;
  border-radius: 3px;
  padding: 0.5rem 1rem;
  width: auto;
  font-size: 14px;
  font-weight: 800;
  display: inline-block;
  border: none;
  box-shadow: 0 1px 0 0 rgba(22, 29, 37, 0.05);

  /* box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08); */
  transition: all 0.15s ease;

  /* : hover {
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  } */
`

export const PrimaryButton = styled(Button)`
  background-color: ${colors.primary};
  border: 1px solid ${colors.primary};
  color: ${colors.white};
`

export const SecondaryButton = styled(Button)`
  background-color: #fff;
  border: 1px solid ${colors.primaryLight};
  color: ${colors.primary};
  margin-left: 10px;
`

export const TertiaryButton = styled(Button)`
  border: 1px solid ${colors.bgWhite};
  background-color: ${colors.bgWhite};
  color: ${colors.primary};
  box-shadow: none;

  : hover {
    text-decoration: underline;
  }
`
export const DeleteButton = styled(Button)`
  background-color: ${colors.danger};
  border: 1px solid ${colors.danger};
  color: ${colors.white};
`
