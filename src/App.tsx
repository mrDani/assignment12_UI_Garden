import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyle';
import Navbar from './components/NavBar';
import BasicInformation from './sections/BasicInformation/BasicInformation';
import Work from './sections/Work/Work';
import Skills from './sections/Skills/Skills';
import Resources from './sections/Resources/Resources';
import DeveloperSetup from './sections/DeveloperSetup/DeveloperSetup';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<BasicInformation />} />
        <Route path="/work" element={<Work />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/developer-setup" element={<DeveloperSetup />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
