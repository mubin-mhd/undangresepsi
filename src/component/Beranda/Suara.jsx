import React, { useEffect, useState } from "react";
import "./_beranda.scss";
import musik from "../../_assets/audio/audio.mp3";

const Player = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);
  return [playing, toggle];
};

const Suara = () => {
  const [playing, toggle] = Player(musik);

  return (
    <div>
      <button onClick={toggle}>
        {playing ? (
          <div>
            <audio id="audio" src="" loop></audio>
            <a className="audio-control">
              <i className="bi bi-mic"></i>
            </a>
          </div>
        ) : (
          <div>
            <audio id="audio" src="" loop></audio>
            <a className="audio-control">
              <i className="bi bi-mic-mute"></i>
            </a>
          </div>
        )}
      </button>
    </div>
  );
};

export default Suara;
