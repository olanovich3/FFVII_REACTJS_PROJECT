import styled from 'styled-components';

import Palette from '../styles/Palette';

const ButtonStyled = styled.button`
  background-color: ${({ variant }) =>
    variant === 'dark'
      ? Palette.main.highlight
      : variant === 'light'
      ? Palette.main.primary
      : 'white'};
  border: ${({ border }) => (border === 'yes' ? '2px solid black' : 'none')};
  color: ${({ color }) => (color === 'white' ? 'white' : 'black')};
  width: fit-content;
  font-family: 'Helvetica';
  font-size: ${({ size }) =>
    size === 'lg' ? '25px' : size === 'sm' ? '14px' : size === 'xm' ? '10px' : '16px'};

  font-weight: 700;
  letter-spacing: 0.5px;
  outline: none;
  padding: ${({ size }) =>
    size === 'lg'
      ? '1.3rem 4.5rem'
      : size === 'sm'
      ? '8px 16px'
      : size === 'xm'
      ? '0.2rem 0.3rem'
      : '0.4rem 4rem'};
  text-transform: uppercase;
  transition: 0.5s ease-in-out;
  &:hover {
    background-color: cadetblue;
  }
`;

const Button = ({ action, variant, color, border, text, size, type }) => {
  return (
    <ButtonStyled
      type={type}
      onClick={action}
      variant={variant}
      color={color}
      border={border}
      size={size}
    >
      {text}
    </ButtonStyled>
  );
};
export default Button;
