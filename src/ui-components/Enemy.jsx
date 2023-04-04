import styled from 'styled-components';

const EnemyStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ variant }) => (variant ? variant : 'yellow')};
  color: ${({ color }) => (color === 'white' ? 'white' : 'black')};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  border: 2px solid black;
  border-radius: 15%;
`;

const Enemy = ({ variant, color, height, width, padding, margin, children }) => {
  return (
    <EnemyStyled
      variant={variant}
      color={color}
      height={height}
      width={width}
      padding={padding}
      margin={margin}
    >
      {children}
    </EnemyStyled>
  );
};

export default Enemy;
