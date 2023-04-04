import styled from 'styled-components';

const AnchorStyled = styled.a`
  text-decoration: none;
  color: ${({ color }) => (color ? color : 'inherit')};
  letter-spacing: 0.5px;
  font-family: 'Helvetica';
  text-transform: capitalize;
  font-size: ${({ size }) => (size === 'lg' ? '15px' : size === 'sm' ? '8px' : '12px')};
  transition: 0.5s ease-in-out;
  &:hover {
    text-decoration: ${({ underline }) => (underline === 'yes' ? 'underline' : 'none')};
  }
`;

const Anchor = ({ text, link, color, size, underline, children }) => {
  return (
    <AnchorStyled href={link} color={color} size={size} underline={underline}>
      {text} {children}
    </AnchorStyled>
  );
};

export default Anchor;
