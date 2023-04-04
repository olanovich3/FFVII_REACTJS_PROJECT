import styled from 'styled-components';

const InputDataStyled = styled.input`
  border-radius: 0.5rem;
  padding: 0.5rem;
  padding: ${({ padding }) => padding};
  background: ${({ back }) => (back ? back : 'none')};
  color: ${({ color }) => color};
  width: ${({ width }) => width};
  ::placeholder {
    color: ${({ letter }) => (letter ? letter : 'white')};
    position: ${({ position }) => position};
  }
`;

const InputData = ({
  position,
  ph,
  type,
  onChange,
  value,
  color,
  back,
  letter,
  width,
  inputMode,
}) => {
  return (
    <InputDataStyled
      width={width}
      placeholder={ph}
      type={type}
      onChange={onChange}
      value={value}
      color={color}
      variant={back}
      letter={letter}
      position={position}
      inputMode={inputMode}
    />
  );
};

export default InputData;
