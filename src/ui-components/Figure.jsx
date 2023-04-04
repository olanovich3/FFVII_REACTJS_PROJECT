import styled from 'styled-components';

const StyledFigure = styled.figure`
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
  flex-direction: ${({ direction }) => (direction === 'column' ? 'column' : 'row')};
  background-color: ${({ variant }) => (variant ? variant : 'none')};
  color: ${({ color }) => (color === 'white' ? 'white' : '#526F80')};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  gap: ${({ gap }) => gap};
  border: ${({ border }) => (border === 'yes' ? '2px solid black' : 'none')};
  flex-wrap: wrap;
  border-radius: 1rem;
`;

const Figure = ({
  children,
  justify,
  align,
  direction,
  variant,
  color,
  margin,
  padding,
  height,
  width,
  gap,
  border,
}) => {
  return (
    <StyledFigure
      justigy={justify}
      align={align}
      direction={direction}
      variant={variant}
      color={color}
      margin={margin}
      padding={padding}
      height={height}
      width={width}
      gap={gap}
      border={border}
    >
      {children}
    </StyledFigure>
  );
};

export default Figure;
