import styled from 'styled-components';

const FormDataStyled = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 2rem;
  background-color: rgba(45, 62, 72, 0.5);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 1rem;
  width: 70%;
`;

const DataForm = ({ onSubmit, children }) => {
  return <FormDataStyled onSubmit={onSubmit}>{children}</FormDataStyled>;
};

export default DataForm;
