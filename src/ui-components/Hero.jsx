import { useState } from 'react';
import styled from 'styled-components';

const StyledHero = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  overflow: hidden;
  object-fit: contain;
  border-radius: 0.8rem;

  & video {
    transform: scale(1.5);
    width: 100%;
    height: 100%;
  }

  & .mute {
    z-index: 100;
    position: absolute;
    background: none;
    left: 47%;
    padding: 1rem;
    border: none;
  }

  & .mute-icon {
    width: 18px;
  }
`;

const Video = ({ width, height }) => {
  const [muted, setMuted] = useState(true);
  const toggleMute = (ev) => {
    setMuted(!muted);
    muted
      ? (ev.currentTarget.nextSibling.muted = false)
      : (ev.currentTarget.nextSibling.muted = true);
  };

  return (
    <StyledHero height={height} width={width}>
      <button className="mute" onClick={(ev) => toggleMute(ev)}>
        {muted ? (
          <img
            className="mute-icon"
            src="https://res.cloudinary.com/dnkacmdmh/image/upload/v1677361546/muted_wkfsl8.png"
            alt="muted Icon"
          />
        ) : (
          <img
            className="mute-icon"
            src="https://res.cloudinary.com/dnkacmdmh/image/upload/v1677361541/sound_c3f3jx.png"
            alt="sound Icon"
          />
        )}
      </button>
      <video
        muted
        autoPlay
        loop
        src="https://res.cloudinary.com/di0zpa5yw/video/upload/v1677165627/ff7/SnapSave.io-FINAL_FANTASY_VII___The_Famous_Opening___HD_online-video-cutter.com_smtht6.mp4"
        type="video/mp4"
      ></video>
    </StyledHero>
  );
};

export default Video;
