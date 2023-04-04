import styled from 'styled-components';

const StyledLabel = styled.label`
  display: inline-block;
  vertical-align: middle;
`;

const Label = ({ children }) => {
  return <StyledLabel>{children}</StyledLabel>;
};

export default Label;
