import styled from 'styled-components';

import Anchor from './Anchor';
import DivFlex from './Divflex';
import Image from './Image';
import TextComponent from './TextComponent';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: transparent;
  color: #b8b8b8;
  margin: 0rem;
  padding: 0rem;
  height: 350px;
  width: 280px;
  gap: 20px;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 15px;
  :hover {
    transform: scale(1.2);
    transition: all 0.5s ease-in-out;
  }
`;

const AboutComponents = ({ img, imgname, link1, link2, name }) => {
  return (
    <StyledDiv>
      <h2>
        <TextComponent text={name} />
      </h2>
      <Image src={img} alt={imgname} width="100%" />
      <DivFlex gap="1rem">
        <Anchor link={link1}>
          <Image
            src="https://res.cloudinary.com/dysog0ybg/image/upload/v1676300979/SocialMedia%20Icons/linkedin_rxabeq.png"
            alt="linkedin"
            width="25px"
            height="25px"
          />
        </Anchor>
        <Anchor link={link2}>
          <Image
            src="https://res.cloudinary.com/dysog0ybg/image/upload/v1676300979/SocialMedia%20Icons/github_a3wdej.png"
            alt="github"
            width="25px"
            height="25px"
          />
        </Anchor>
      </DivFlex>
    </StyledDiv>
  );
};

export default AboutComponents;
