import React, { useState } from 'react';
import './index.css';
import { App, ChatGroup, LoginApp, SignupApp, PersonalProfile, EditPage } from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Apps = () => {
    const [token, setToken] = useState()
    if (!token) {
        return <LoginApp setToken={setToken} />
    }

    return <div>
        <Router>
            <Routes>
                <Route exact path="/signup" element={<SignupApp />} />
                <Route exact path="/login" element={<LoginApp />} />
                <Route exact path="/personalInfo" element={<PersonalProfile />} />
                <Route exact path="/edit" element={<EditPage />} />
                <Route exact path="/joinGroup" element={<ChatGroup />} />
                <Route exact path="/chat_room" element={<App />} />
            </Routes>
        </Router>
    </div>
};

export default Apps;

