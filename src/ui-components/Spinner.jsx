import styled from 'styled-components';

import Image from './Image';

const SpinnerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = () => {
  <SpinnerStyled>
    <Image
      src="https://res.cloudinary.com/dysog0ybg/image/upload/v1677437700/5mr9_qvneut.gif"
      alt="spinner"
    />
  </SpinnerStyled>;
};

export default Spinner;
