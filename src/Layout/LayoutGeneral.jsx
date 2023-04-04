import styled from 'styled-components';

const LayoutGeneralStyled = styled.div`
  display: grid;
  grid-template-rows: 35vh 1fr 10vh;
  min-height: 100vh;
`;

const LayaoutGeneral = ({ children }) => {
  return <LayoutGeneralStyled>{children}</LayoutGeneralStyled>;
};

export default LayaoutGeneral;
