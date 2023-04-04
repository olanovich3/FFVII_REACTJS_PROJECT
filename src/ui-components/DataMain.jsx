import styled from 'styled-components';

const DataMainStyled = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding: 4rem;
  gap: 5rem;
  background: linear-gradient(transparent, #264a5f),
    url(https://res.cloudinary.com/dvdoak5et/image/upload/v1677431074/Bestiary/ff-sword-hero_1_tnzvmn.jpg);
  background-size: cover;
  background-attachment: fixed;
  @media (max-width: 1284px) {
    flex-direction: column;
  }
`;

const DataMain = ({ children }) => {
  return <DataMainStyled>{children}</DataMainStyled>;
};

export default DataMain;
