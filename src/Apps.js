import React, { useState } from 'react';
import './index.css';
import { App, ChatGroup, LoginApp, SignupApp, PersonalProfile, EditPage } from './App';
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';

const Apps = () => {
    // const [token, setToken] = useState()
    // if (!token) {
    //     return (
    //         <><div>
    //             {/* <SignupApp setToken={setToken} /> */}
    //             <LoginApp setToken={setToken} />
    //         </div></>
    //     )

    // }

    return (
        <Routes>
            <Route exact path="/signup" element={<SignupApp />} />
            <Route exact path="/login" element={<LoginApp />} />
            <Route exact path="/personalInfo" element={<PersonalProfile />} />
            <Route exact path="/edit" element={<EditPage />} />
            <Route exact path="/joinGroup" element={<ChatGroup />} />
            <Route exact path="/chat_room" element={<App />} />
        </Routes>
    )

};

export default Apps;

