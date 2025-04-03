import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Existing routes (not shown in nav right now)
import { Login } from './login/login';
import { MadLib } from './madlib/madlib';
import { Contact } from './contact/contact';

// Portfolio components
import HeroSection from './portfolio/HeroSection';
import AboutMe from './portfolio/AboutMe';
import ScriptsAndVideos from './portfolio/ScriptsAndVideos';
// import MusicGallery from './portfolio/MusicGallery';
// import AIIntroGame from './portfolio/AIIntroGame';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 🎯 Default route: Portfolio scroll site */}
        <Route path="/" element={
          <>
            <HeroSection />
            <AboutMe />
            <ScriptsAndVideos />
            {/* <MusicGallery /> */}
            {/* <AIIntroGame /> */}
          </>
        } />
        
        {/* 🎭 Hidden app routes (still work if navigated directly) */}
        <Route path="/login" element={<Login />} />
        <Route path="/madlib" element={<MadLib />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
