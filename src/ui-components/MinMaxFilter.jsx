import styled from 'styled-components';

const MinMaxFilterStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: ${({ height }) =>
    height === 'lg' ? '80px' : height === 'sm' ? '40px' : '60px'};
  width: ${({ width }) =>
    width === 'lg' ? '500px' : width === 'sm' ? '250px' : '350px'};
  padding: 10px 5px;
  margin: 10px 20px;
  background-color: rgba(0, 0, 0, 0.274);
  border-radius: 6px;
  position: relative;
  color: white;
`;
const MinMaxFilter = ({ width, height, action, minMin, maxMin, minMax, maxMax }) => {
  return (
    <MinMaxFilterStyled
      width={width}
      height={height}
      minMin={minMin}
      maxMin={maxMin}
      minMax={minMax}
      maxMax={maxMax}
    >
      <h4 className="minh4Input">Min: {minMax}</h4>
      <h4 className="maxh4Input">Max: {maxMin}</h4>
      <div className="inputsFilter">
        <div className="trackInputs"></div>
        <div
          className="maxTrackInputs circleTrackInputs"
          style={{ left: `${(maxMin * 100) / maxMax - 5}%` }}
        ></div>
        <div
          className="minTrackInputs circleTrackInputs"
          style={{ right: `${100 - (minMax * 100) / maxMax - 5.4}%` }}
        ></div>
        <input
          className="maxInput"
          type="range"
          min={minMax}
          max={maxMax}
          defaultValue={maxMax}
          onChange={action}
          style={{ width: `${100 - (minMax * 100) / maxMax}%` }}
        />
        <input
          className="minInput"
          type="range"
          min={minMin}
          max={maxMin - 1}
          defaultValue={minMin}
          onChange={action}
          style={{ width: `${(maxMin * 100) / maxMax}%` }}
        />
      </div>
    </MinMaxFilterStyled>
  );
};

export default MinMaxFilter;
