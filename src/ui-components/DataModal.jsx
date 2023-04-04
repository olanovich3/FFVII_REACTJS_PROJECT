import styled from 'styled-components';

const ModalDataStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.918);
  z-index: 999;
`;

const DataModal = ({ children }) => {
  return <ModalDataStyled>{children}</ModalDataStyled>;
};

export default DataModal;
