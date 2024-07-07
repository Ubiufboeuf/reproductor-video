import { useState, useEffect } from "react";
import { Maximize, Minimize, Mute, Pause, Play, Unmute } from "./assets/IconsSVG";
import "./Controls.css"

export default function ({ player="null" }) {
  const [playPause, setPlayPause] = useState("play");
  const [muteUnmute, setMuteUnmute] = useState("unmute")
  let [volumeValue, setVolumeValue] = useState(1);
  const [minMax, setMinMax] = useState("min");

  const [togglePP, setTogglePP] = useState(Play());
  const [toggleMU, setToggleMU] = useState(Unmute());
  const [toggleMM, setToggleMM] = useState(Maximize());

  const vid_respaldo = document.createElement("video");
  vid_respaldo.setAttribute("autoPlay", "")
  vid_respaldo.setAttribute("id", "video-player")
  vid_respaldo.setAttribute("src", "undefined")
  vid_respaldo.setAttribute("duration", 0);
  if (player === null) player = vid_respaldo;
  
  const playPauseF = () => setPlayPause((playPause === "play") ? "pause" : "play") 
  const muteUnmuteF = () => setMuteUnmute((muteUnmute === "mute") ? "unmute" : "mute")
  const minMaxF = () => setMinMax((minMax === "min") ? "max" : "min")
  
  // useEffect(() => {
  //   if (playPause === "play") {
  //     player.play();
  //     setTogglePP(Pause());
  //   } else {
  //     player.pause();
  //     setTogglePP(Play());
  //   }
  // }, [playPause])
  
  useEffect(() => {
    if (muteUnmute === "mute") {
      player.volume = 0;
      setToggleMU(Mute());
    } else {
      player.volume = volumeValue;
      setToggleMU(Unmute());
    }
  }, [muteUnmute])
  
  useEffect(() => {
    if (minMax === "min") {
      setToggleMM(Maximize());
    } else {
      setToggleMM(Minimize());
    }
  }, [minMax])
  
  return (
    <div id="controls">
      <div id="sub-controls">
        <div id="wide-playPause" onClick={playPauseF} />
        <div id="bottom-controls">
          <div>
            <button id="btn-playPause" onClick={playPauseF}>
              {togglePP}
            </button>
            <button id="btn-muteUnmute" onClick={muteUnmuteF}>
              {toggleMU}
            </button>
          </div>
          <p id="indicador_tiempo">
            <span id="contados">0:00</span>
            <span id="separador">/</span>
            <span id="restantes">0:00</span>
          </p>
          <button id="btn-minmax" onClick={minMaxF}>
            {toggleMM}
          </button>
        </div>
      </div>
    </div>
  )
}