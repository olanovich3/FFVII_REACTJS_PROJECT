import styled from 'styled-components';

const SectionFlexStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #526f80;
  width: 100vw;
  padding: 4rem;
  gap: 5rem;
`;

const SectionFlex = ({ children }) => {
  return <SectionFlexStyled>{children}</SectionFlexStyled>;
};

export default SectionFlex;
