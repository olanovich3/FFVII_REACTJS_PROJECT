import { useContext } from 'react';
import styled from 'styled-components';

import { PageContext } from '../context/PageContext';

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
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
  background-color: ${({ variant }) => (variant ? variant : '#10101C')};
  background: linear-gradient(#264a5f, #10101c);
  color: ${({ color }) => (color ? color : 'inherit')};
  height: ${({ height }) => height};
  width: 100vw;
  padding: ${({ padding }) => padding};
`;

const Header = ({ children, justify, align, color, height, padding, variant }) => {
  const { page } = useContext(PageContext);
  {
    if (page !== 'login') {
      return (
        <HeaderStyled
          justify={justify}
          align={align}
          color={color}
          height={height}
          padding={padding}
          variant={variant}
        >
          {children}
        </HeaderStyled>
      );
    } else {
      return (
        <HeaderStyled
          justify={justify}
          align={align}
          color={color}
          height={height}
          padding={padding}
          variant={variant}
        >
          {children}
        </HeaderStyled>
      );
    }
  }
};

export default Header;
