import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/home';
import FirstDay from '../pages/first-day';
import SecondDay from '../pages/second-day';
import ThirdDay from '../pages/third-day';

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/day-1" element={<FirstDay />} />
      <Route path="/day-2" element={<SecondDay />} />
      <Route path="/day-3" element={<ThirdDay />} />
    </Routes>
  );
};

export default App;
