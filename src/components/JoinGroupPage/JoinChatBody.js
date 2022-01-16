import { Fragment, useState } from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom';

const JoinChatGroup = () => {
    const [group, setGroup] = useState('')
    const selectGroup = (event) => {
        setGroup(event.target.value)
    }
    return (
        <>
            <Body>
                <div>
                    <InputStyle>
                        <div>
                            <input style={{ width: '20rem', height: '4vh', marginTop: '3rem' }} type='text' placeholder='Enter Username' />
                        </div>
                        <div>
                            <select value={group} onChange={selectGroup} style={{ marginTop: '3rem', width: '20.5rem', height: '5vh' }}>

                                <option value="frontend" >Front-end</option>
                                <option value="backend" >Back-end</option>
                                <option value="ui" >UI-Design</option>
                                <option value="devops" >DevOps</option>
                            </select>
                        </div>
                    </InputStyle>
                </div>
                <div>
                    <Link to='/chat_room' style={{ textDecoration: 'none' }}><h6 style={{ marginLeft: '12rem' }}>Join Group</h6></Link>
                </div>

            </Body>
        </>
    )
}

const Body = styled.h1`
background: #eeeee8;
color: silver;
height: 50vh;


`
const InputStyle = styled.div`
 margin-Left: 6rem;
`
export default JoinChatGroup
