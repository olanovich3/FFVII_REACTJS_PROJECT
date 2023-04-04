import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { UserContext } from '../context/UserContext';
import Palette from '../styles/Palette';

const NavLinkStyled = styled.button`
  background-color: transparent;
  border: none;
  text-decoration: none;
  color: ${({ color }) =>
    color === 'dark' ? Palette.main.dark : Palette.main.background};
  font-family: 'Helvetica';
  text-transform: uppercase;
  font-size: ${({ size }) => (size === 'lg' ? '18px' : size === 'sm' ? '8px' : '12px')};
  padding: ${({ size }) =>
    size === 'lg' ? '0.3rem 0.6rem' : size === 'sm' ? '0.1rem 0.2rem' : '0.2rem 0.3rem'};
  font-weight: bolder;
  letter-spacing: 0.5px;
  outline: none;
  transition: 0.5s ease-in-out;
  width: fit-content;
  &:hover {
    color: #33d6c9;
  }
  & .active {
    color: ${Palette.main.highlight};
  }
`;

const _NavLink = ({ page, size }) => {
  const navigate = useNavigate();
  const { logout } = useContext(UserContext);
  return (
    <NavLinkStyled
      size={size}
      onClick={() => {
        page == 'home'
          ? navigate('/')
          : page == 'logout'
          ? logout()
          : navigate(`/${page}`);
      }}
    >
      {page}
    </NavLinkStyled>
  );
};
export default _NavLink;
