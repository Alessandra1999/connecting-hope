import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './ui/screens/home';
import { HomeNotLogged } from './ui/screens/HomeNotLogged';
import { InitialScreen } from './ui/screens/register&login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InitialScreen />} />
        <Route path="/homeNotLogged" element={<HomeNotLogged />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
