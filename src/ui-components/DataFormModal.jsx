import styled from 'styled-components';

const DataFormModalStyled = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const DataFormModal = ({ children, onSubmit }) => {
  return <DataFormModalStyled onSubmit={onSubmit}>{children}</DataFormModalStyled>;
};

export default DataFormModal;
