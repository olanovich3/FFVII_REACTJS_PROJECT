import { useContext } from 'react';
import styled from 'styled-components';

import { PageContext } from '../context/PageContext';
import { UserContext } from '../context/UserContext';
import _NavLink from './NavLink';

const NavBarStyled = styled.nav`
  display: flex;
  justify-content: ${({ justify }) =>
    justify === 'center'
      ? 'center'
      : justify === 'flex-end'
      ? 'flex-end'
      : justify === 'flex-star'
      ? 'flex-star'
      : justify === 'space-around'
      ? 'space-around'
      : justify === 'space-between'
      ? 'space-between'
      : 'center'};
  align-items: ${({ align }) =>
    align === 'center'
      ? 'center'
      : align === 'flex-end'
      ? 'flex-end'
      : align === 'flex-star'
      ? 'flex-star'
      : align === 'space-around'
      ? 'space-around'
      : align === 'space-between'
      ? 'space-between'
      : 'center'};
  background-color: ${({ color }) => (color ? color : '#2d3e48')};
  color: ${({ color }) => (color ? color : 'inherit')};
  height: ${({ height }) => height};
  width: 100%;
  padding: ${({ padding }) => padding};
  gap: ${({ gap }) => gap};
  position: ${({ position }) => (position ? position : 'relative')};
`;
const NavBar = ({ height, justify, align, color, padding, position, gap }) => {
  const { user } = useContext(UserContext);
  const { page } = useContext(PageContext);

  return (
    <NavBarStyled
      justify={justify}
      align={align}
      height={height}
      color={color}
      padding={padding}
      position={position}
      gap={gap}
    >
      {page !== 'home' && <_NavLink size={'lg'} page={'home'} />}
      {page !== 'bestiary' && <_NavLink size={'lg'} page={'bestiary'} />}
      {page !== 'data' && <_NavLink size={'lg'} page={'data'} />}
      {page !== 'about' && <_NavLink size={'lg'} page={'about'} />}
      {!user && <_NavLink size={'lg'} page={'login'} />}
      {user && <_NavLink size={'lg'} page={'logout'} />}
    </NavBarStyled>
  );
};

export default NavBar;
