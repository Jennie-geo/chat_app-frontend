import styled from 'styled-components'
import GroupMembers from './GroupMembers'
import GroupName from './GroupName'
import Footer from './Footer';
import io from 'socket.io-client';
import { useEffect, useState } from 'react';
import User from '../User'
import { nanoid } from 'nanoid';
const socket = io('http://localhost:8887');
const userName = nanoid(4)
//import Header from './Header';

const Body = ({ name }) => {
    const [chat, setChat] = useState([])
    useEffect(() => {
        socket.on("chat", (payload) => {
            setChat([...chat, payload])
        })
    })

    return (
        <div>
            <FullBody>
                {/* <Header /> */}
                <Left>Left part of the chat
                    <GroupName />
                    <GroupMembers />
                </Left>
                <Right>
                    <h1>Right part of the chat</h1>

                    {chat.map((payload, index) => {
                        return <p key={index}>{payload.message}: <Span><span>ids: {payload.userName}</span></Span> </p>

                    })}
                </Right>
            </FullBody>
            <Footer />
        </div>
    )
}
const FullBody = styled.div`
display: flex;
height: 55vh



`
const Left = styled.div`
width: 30%;
height: 55vh;
background: #eeeee8;

`
const Right = styled.div`
background: #eeeef8;
width: 60%;
color: black;
height: 55vh;
scroll
`
const Span = styled.span`
padding: 5px 15px;
background: orange
`
export default Body
