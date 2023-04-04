import styled from 'styled-components';

const DivGridStyled = styled.div`
  display: grid;
  grid-template-columns: ${({ cols }) => (cols ? cols : '1fr 1fr')};
  grid-auto-rows: minmax(100px, auto);
  grid-gap: ${({ gridgap }) => (gridgap ? gridgap : '40px')};
  background-color: ${({ variant }) => (variant ? variant : 'none')};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  overflow-x: ${({ flowx }) => flowx};
  overflow-y: ${({ flowy }) => flowy};
  padding: ${({ padding }) => padding};
`;

const DivGrid = ({ padding, gridgap, children, variant, width, height, cols }) => {
  return (
    <DivGridStyled
      padding={padding}
      gridgap={gridgap}
      cols={cols}
      width={width}
      height={height}
      variant={variant}
    >
      {children}
    </DivGridStyled>
  );
};

export default DivGrid;
