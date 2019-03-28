import styled from 'styled-components'
import {colors} from '../utils/styles'

const Button = styled.button`
  cursor: pointer;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  position: relative;
  text-align: center;
  width: auto;
  font-size: 14px;
  font-weight: 800;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`

export const PrimaryButton = styled(Button)`
  background-color: ${colors.textLight};
  border: 1px solid ${colors.textLight};
  color: ${colors.white};
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.2);
`

export const SecondaryButton = styled(Button)`
  background-color: #fff;
  border: 1px solid ${colors.primaryight};
  color: ${colors.textLight};
  margin-left: 10px;
`

export const TertiaryButton = styled(Button)`
  border: 1px solid ${colors.bgWhite};
  background-color: ${colors.bgWhite};
  color: ${colors.textLight};

  : hover {
    background-color: ${colors.bgLight};
    border: 1px solid ${colors.bgLight};
  }
`
export const DeleteButton = styled(Button)`
  background-color: ${colors.danger};
  border: 1px solid ${colors.danger};
  color: ${colors.white};
`
