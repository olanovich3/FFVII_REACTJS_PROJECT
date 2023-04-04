import styled from 'styled-components';

const DivModalDataStyled = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5%;
  gap: 2rem;
  width: 50%;
  height: 90%;
`;

const DataDivModal = ({ children }) => {
  return <DivModalDataStyled>{children}</DivModalDataStyled>;
};

export default DataDivModal;
