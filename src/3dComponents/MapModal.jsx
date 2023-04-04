import './globeMap.css';

import { useState } from 'react';

import TextureGlobe from './Globe3D';
import Texture from './Map3D';
const MapModal = () => {
  const [change, setChange] = useState(false);
  return (
    <div className="canvas-container">
      {change ? <Texture /> : <TextureGlobe />}
      <button
        className="btnMap"
        onClick={() => {
          setChange(!change);
        }}
      >
        {change ? 'Show globe' : 'Show map'}
      </button>
    </div>
  );
};

export default MapModal;
