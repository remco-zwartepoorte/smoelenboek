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
`

export const PrimaryButton = styled(Button)`
  background-color: ${colors.primary};
  border: 1px solid ${colors.primary};
  color: ${colors.white};
`

export const SecondaryButton = styled(Button)`
  background-color: #fff;
  border: 1px solid ${colors.primaryight};
  color: ${colors.primary};
  margin-left: 10px;
`

export const TertiaryButton = styled(Button)`
  border: none;
  background-color: ${colors.bgWhite};
  color: ${colors.primary};
  margin-left: 10px;
`
