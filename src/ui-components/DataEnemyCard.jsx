import styled from 'styled-components';

const EnemyCardDataStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 350px;
  width: 350px;
  border: none;
  background-color: transparent;
  padding: 1rem;
  gap: 1rem;
  box-shadow: 0 0 15px;
  border-radius: 10px;
`;

const DataEnemyCard = ({ children }) => {
  return <EnemyCardDataStyled>{children}</EnemyCardDataStyled>;
};

export default DataEnemyCard;
