import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmailBrowser from './views/EmailBrowser';
import EmailViewer from './views/EmailViewer';

function App() {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<EmailBrowser />} />
            <Route path="/details/:id" element={<EmailViewer />} />
            {/* Add other routes as needed */}
         </Routes>
      </Router>
   );
}

export default App;
