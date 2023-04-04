import styled from 'styled-components';

import Palette from '../styles/Palette';

const StyledMain = styled.main`
  background-color: ${Palette.main.background};
  background-image: ${({ image }) => image};
  background: linear-gradient(transparent, #264a5f),
    url(https://res.cloudinary.com/dvdoak5et/image/upload/v1677431074/Bestiary/ff-sword-hero_1_tnzvmn.jpg);
  background-size: cover;
  background-attachment: fixed;
  color: #b8b8b8;
  display: flex;
  gap: ${({ gap }) => gap};
  flex-direction: ${({ direction }) => (direction == 'rows' ? 'rows' : 'column')};
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
  width: 100vw;
  height: ${({ homeheight }) => (homeheight ? homeheight : '100vh')};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`;

const Main = ({
  margin,
  gap,
  children,
  homeheight,
  direction,
  justify,
  align,
  image,
  padding,
}) => {
  return (
    <StyledMain
      direction={direction}
      justify={justify}
      align={align}
      homeheight={homeheight}
      image={image}
      gap={gap}
      margin={margin}
      padding={padding}
    >
      {children}
    </StyledMain>
  );
};
export default Main;
