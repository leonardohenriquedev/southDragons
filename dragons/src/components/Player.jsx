import { useEffect } from 'react';
import music from '../songs/background.mp3';

function Player() {
  useEffect(() => {
    document.getElementById('backgroundMusic').currentTime = 1.7;
  }, []);
  return (
    <div className="player">
      <audio id="backgroundMusic" loop>
        <source src={music} type="audio/mp3" />
      </audio>
    </div>
  );
}

export default Player;
