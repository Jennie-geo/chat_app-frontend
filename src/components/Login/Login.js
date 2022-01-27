import React, { useState } from 'react'
import styled from 'styled-components'
import { AccessAlarm, LightMode, ThreeDRotation } from '@mui/icons-material';
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';
// import { BrowserRouter as Router } from 'react-router-dom';
import { TextField } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PropTypes } from 'prop-types';
import LoginUser from '../LoginUser/LoginUser';
import {
    faGoogle,
    faFacebook,
    faTwitter,
    faGithub
} from '@fortawesome/free-brands-svg-icons'

export default function Login({ setToken }) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState()
    // const Login = ({setToken}) => {
    const handleSubmit = async (e) => {
        e.preventDefault()
        const token = await LoginUser({ email, password });
        console.log(token)
        setToken(token);
    }
    return (
        <div style={{ padding: '3rem' }}>
            <form onSubmit={handleSubmit}>
                <Logins>
                    <div>
                        <TextField id="outlined-basic" label="Email" variant="outlined" style={{ width: '20rem', height: '4vh', margin: '10rem 3rem 1rem 3rem', borderRadius: '8px' }} type="text" InputProps={{ endAdornment: (<MailIcon />) }} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <TextField id="outlined-basic" label="Password" variant="outlined" style={{ width: '20rem', height: '4vh', margin: '2rem 3rem 1rem 3rem', borderRadius: '7px' }} type="password" InputProps={{ endAdornment: (<LockIcon />) }} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <Link to='/personalInfo' style={{ textDecoration: 'none' }}><h3 style={{ marginLeft: '12rem' }}>Login</h3></Link>

                    </div>
                    <SocialApp>
                        <div> or continue with social profile</div>
                        <FontAwesomeIcon icon={faGoogle} style={{ margin: '1rem 1rem', fontSize: '1.5rem', cursor: 'pointer' }} />
                        <FontAwesomeIcon icon={faFacebook} style={{ margin: '1rem 1rem', fontSize: '1.5rem', cursor: 'pointer' }} />
                        <FontAwesomeIcon icon={faTwitter} style={{ margin: '1rem 1rem', fontSize: '1.5rem', cursor: 'pointer' }} />
                        <FontAwesomeIcon icon={faGithub} style={{ margin: '1rem 1rem', fontSize: '1.5rem', cursor: 'pointer' }} />
                        <div>Don't have an account yet? <NavLink to='/signup' style={{ textDecoration: 'none' }}> Register</NavLink></div>
                    </SocialApp>
                </Logins >

            </form>
        </div >
    )
}
Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

const Logins = styled.div`
 background: #eeeef8;
 width: 30%;
 height: 70vh;
 margin: 7rem 30rem;
 border-radius: 15px;
 `
const SocialApp = styled.div`
margin-left: 6rem;
`

//export default Login

