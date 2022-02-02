import React, { StrictMode } from 'react';
import reactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

reactDom.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
  document.getElementById('root')
);
