import React, { useState } from 'react';
import Home from '../src/components/Home.js';
import FormNewVideo from './components/FormNewVideo.js';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';



function App() {
  // Paa el almacenamiento de los nuevos videos
  const [videos, setVideos] = useState([]);
  //Actualización del estado de los videos añadienod un nuevo video
  const agregarVideo = (nuevoVideo) => {
    setVideos([...videos, nuevoVideo]);
  };


  return (
    <Router>
      <Routes>
        <Route path = '/' element = { <Home />}/>
        <Route path = '/home' element = { <Home />}/>
        <Route path = '/crear-nuevo-video' element = { <FormNewVideo onAgregarVideo={agregarVideo}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
