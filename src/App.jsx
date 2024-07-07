import { useState, useEffect } from 'react';
import './App.css'
import Controls from './Controls';

function App() {
  const [fileName, setFileName] = useState("Seleccionar video");
  const [file, setFile] = useState();
  const [videoSrc, setVideoSrc] = useState();
  const [url, setUrl] = useState();

  const video_player = document.querySelector("#video-player");

  function makeObjURL (file) {
    const local_url = URL.createObjectURL(file);
    // console.log("local_url: ", local_url)
    return local_url;
  }

  const handleChange = (e) => setFile(e.target.files[0])

  useEffect(() => {
    if (file !== undefined) {
      // console.log("file: ", file);
      setFileName(file.name);
      // console.log("file.name: ", file.name);
      const local_url = makeObjURL(file);
      setUrl(local_url);
      setVideoSrc(local_url);
    }
  }, [file])

  useEffect(() => {
    if (file === undefined) {
      setFileName("Seleccionar video")
      setVideoSrc()
    }
  }, [file, url])

  return (
    <>
      <header>
        <label id="file-label" title={fileName}>
          <input id="file-picker" type="file" onChange={handleChange} />
          <span id="file-name">{fileName}</span>
        </label>
      </header>
      <main>
        <p id="mensaje">Lo dejo por ahora, no sé cómo seguirlo</p>
        <article id="video-wrapper">
          <video autoPlay id="video-player" src={videoSrc}></video>
          <Controls key="controls_component" player={video_player} />
        </article>
      </main>
    </>
  )
}

export default App
