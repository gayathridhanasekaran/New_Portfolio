import { Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { DarkTheme } from './Shared/Themes';
import { AnimatePresence } from 'framer-motion';
import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/Work';
import SoundBar from './Shared/SoundBar';
import './App.css';
import MySkills from './Components/MySkills';

function App() {
  const location = useLocation();

  return (
    <>
      <ThemeProvider theme={DarkTheme}>
        <SoundBar />
        <AnimatePresence mode='wait'>
          <Routes key={location.pathname} location={location} >
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/myskills" element={<MySkills />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </AnimatePresence>

      </ThemeProvider>
    </>
  );
}

export default App;
