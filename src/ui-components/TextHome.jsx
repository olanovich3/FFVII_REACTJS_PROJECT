import styled from 'styled-components';

const HomeTextStyled = styled.div`
  background-color: ${({ variant }) => (variant === 'dark' ? 'black' : 'transparent')};
  color: ${(color) => (color === 'white' ? 'white' : 'black')};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: ${(heigh) => heigh};
  width: ${(width) => width};
  padding: ${(padding) => padding};
  margin: ${(margin) => margin};
  font-size: ${(size) => size};
`;

const HomeText = ({
  size,
  text,
  variant,
  color,
  heigh,
  width,
  padding,
  margin,
  children,
}) => {
  return (
    <HomeTextStyled
      size={size}
      variant={variant}
      color={color}
      heigh={heigh}
      width={width}
      padding={padding}
      margin={margin}
    >
      {children} {text}
    </HomeTextStyled>
  );
};

export default HomeText;
