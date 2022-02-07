import React, { useContext } from 'react';
import DragonsContext from '../Context/DragonsContext';
import { pauseMusic, playMusic } from '../services/HandleMusic';
import mute from '../images/soundOn.png';
import unmute from '../images/soundOff.png';
import '../styles/SongButton.css';

export default function ToggleMusic() {
  const { music, setMusic } = useContext(DragonsContext);

  function toggle(action) {
    if (action === 'mute') {
      setMusic(false);
      pauseMusic();
    }

    if (action === 'unmute') {
      setMusic(true);
      playMusic();
    }
  }

  return music ? (
    <img
      src={mute}
      className="songButton"
      onClick={() => toggle('mute')}
      alt="mute song"
    />
  ) : (
    <img
      src={unmute}
      className="songButton"
      onClick={() => toggle('unmute')}
      alt="unmute song"
    />
  );
}
