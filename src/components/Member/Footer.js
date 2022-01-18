import styled from 'styled-components'
import { useState, useEffect } from "react";
import io from 'socket.io-client';
import { nanoid } from 'nanoid'
const socket = io('http://localhost:8887');
const userName = nanoid(4)

const Footer = () => {
    const [message, setMessage] = useState('')


    const sendChat = function (e) {
        e.preventDefault()
        socket.emit("chat", { message, userName })
        setMessage('')
    }

    return (
        <div>

            <Foot>
                <form onSubmit={sendChat}>

                    <input style={{ width: '70%', margin: '0.5rem 5rem', height: '8vh', borderRadius: '5px' }} name="chat" type='text' placeholder="let the chat begin" value={message} onChange={(e) => { setMessage(e.target.value) }} />

                    <button style={{ width: '8rem', height: '8vh', fontSize: '25px', margin: '0.5rem -4rem', borderRadius: '5px', cursor: 'pointer' }} type="submit"> Enter </button>
                </form>
            </Foot>
        </div>
    )
}

const Foot = styled.div`
background: #999993;
color: white;
height: 33.5vh;
width: 100%;
`

export default Footer
