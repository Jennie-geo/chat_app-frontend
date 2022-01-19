import styled from 'styled-components'
// import GroupMembers from './GroupMembers'
import GroupName from './GroupName'
import Footer from './Footer';
import io from 'socket.io-client';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
const socket = io('http://localhost:8887');
const userName = nanoid(4)

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
                <Left>
                    <GroupName />
                </Left>
                <Right>
                    {chat.map((payload, index) => {
                        return <p style={{ width: "60%", height: "3vh", background: "#cbced4", marginLeft: "2rem", padding: "1rem", borderRadius: "4px", border: "none" }} key={index}>{payload.message} <Span><span>id: {payload.userName}</span></Span> </p>
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
width: 70%;
color: black;
height: 55vh;
overflow: scroll;
`
const Span = styled.span`
padding: 5px 15px;
color: orange;
`
export default Body
