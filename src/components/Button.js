import styled from 'styled-components';
import { colors } from '../utils/styles';

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
  background-color: ${colors.primary};
  border: 1px solid ${colors.primary};
  color: ${colors.white};
`;

export const SecondaryButton = styled(Button)`
  background-color: #fff;
  border: 1px solid ${colors.primaryight};
  color: ${colors.primary};
  margin-left: 10px;
`;

export const TertiaryButton = styled(Button)`
  border: none;
  background-color: ${colors.bgWhite};
  color: ${colors.primary};
  margin-left: 10px;
`;

// function Button({ primary, outline, plain, submit, children }) {
//   const type = submit ? 'submit' : 'button';
//   return <button type={type}>{children}</button>;
// }

// export default Button;

// Button.propTypes = {
//   children: PropTypes.node.isRequired,
//   primary: PropTypes.bool,
//   outline: PropTypes.bool,
//   plain: PropTypes.bool,
//   type: PropTypes.string
// };
