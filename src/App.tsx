import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LangSelect from './ui/LangSelect';
import { Routes, Route } from 'react-router-dom';
import HomePage from './ui/HomePage';

export default function ProgramTimeline() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <>
    <Routes>
      <Route path="/wedding" element={<LangSelect />} />
      <Route path="/wedding/home" element={<HomePage />} />
    </Routes>
    </>
  );
}
