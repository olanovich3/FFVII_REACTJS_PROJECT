import styled from 'styled-components';

import Palette from '../styles/Palette';

const ButtonRegisterStyled = styled.button`
  background-color: transparent;
  border: none;
  text-decoration: none;
  //color: ${({ color }) => (color === 'dark' ? Palette.main.dark : Palette.main.light)};
  color: white;
  font-family: 'Helvetica';
  text-transform: capitalize;
  font-size: ${({ size }) => (size === 'lg' ? '15px' : size === 'sm' ? '8px' : '12px')};
  padding: ${({ size }) =>
    size === 'lg' ? '0.3rem 0.6rem' : size === 'sm' ? '0.1rem 0.2rem' : '0.2rem 0.3rem'};
  font-weight: 700;
  letter-spacing: 0.5px;
  outline: none;
  transition: 0.5s ease-in-out;
  width: fit-content;
  &:hover {
    background-color: ${({ color }) =>
      color === 'dark' ? Palette.main.light : Palette.main.dark};
  }
  &:active {
    color: ${Palette.main.highlight};
  }
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 0.5rem;
  margin-bottom: 0.2rem;
`;

const ButtonRegister = ({ text, action, color }) => {
  return (
    <ButtonRegisterStyled color={color} onClick={action}>
      {text}
    </ButtonRegisterStyled>
  );
};
export default ButtonRegister;
