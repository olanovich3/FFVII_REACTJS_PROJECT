import styled from 'styled-components';

const TextComponentStyled = styled.span`
  color: #e8dcb6;
  size: 20px;
`;

const TextComponent = ({ size, text }) => {
  return <TextComponentStyled size={size}>{text}</TextComponentStyled>;
};

export default TextComponent;
