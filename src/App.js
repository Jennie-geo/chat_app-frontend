import style from 'styled-components';
import Body from './components/Member/Body'
import JoinChatGroup from './components/JoinGroupPage/JoinChatBody';
import Header from './components/Member/Header';
import ChatHeader from './components/JoinGroupPage/ChatHeader';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import User from '../src/components/User'
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import Edit from './components/Edit/Edit'
// import { useState, useEffect } from "react";
// import io from 'socket.io';
// import {nanoid} from 'nanoid';

//no dotenv
// const socket = io('http://localhost:8887')

function App() {
  return (
    <div className="App">

      <Wrapper>
        <Header />
        <Body />
      </Wrapper>

    </div>
  );
}

function ChatGroup() {
  return (
    <div>
      <Overall>
        <ChatHeader />
        <JoinChatGroup />
      </Overall>

    </div>
  )
}

function SignupApp() {
  return (
    <div>
      <Signup />
    </div>
  )
}

function LoginApp() {
  return (
    <div>
      <Login />
    </div>
  )
}

function PersonalProfile(props) {
  return (
    <div>
      <PersonalInfo />
    </div>
  )
}

function EditPage() {
  return (
    <Edit />
  )
}


const Wrapper = style.div`
 background: 'black';
`
const Overall = style.div`
margin: 7rem 25rem;
height: 70vh;
width: 40%;
background: #999993;
border-radius: 15px;

`
export { App, ChatGroup, LoginApp, SignupApp, PersonalProfile, EditPage };
