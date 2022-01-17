import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App, ChatGroup, LoginApp, SignupApp, PersonalProfile, EditPage } from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>

    <Router>
      <Routes>
        <Route exact path="/signup" element={<SignupApp />} />
        <Route exact path="/login" element={<LoginApp />} />
        <Route exact path="/personalInfo" element={<PersonalProfile />} />
        <Route exact path="/edit" element={<EditPage />} />
        <Route exact path="/" element={<ChatGroup />} />
        <Route exact path="/chat_room" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
