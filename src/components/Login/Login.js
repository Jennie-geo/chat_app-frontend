import React, { Fragment } from 'react'
import styled from 'styled-components'
import { AccessAlarm, LightMode, ThreeDRotation } from '@mui/icons-material';
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';
import { BrowserRouter as Router } from 'react-router-dom';
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGoogle,
    faFacebook,
    faTwitter,
    faGithub
} from '@fortawesome/free-brands-svg-icons'

const Signup = () => {
    return (
        <div style={{ padding: '3rem' }}>
            <Login>
                <div>
                    <TextField id="outlined-basic" label="Email" variant="outlined" style={{ width: '20rem', height: '4vh', margin: '10rem 3rem 1rem 3rem', borderRadius: '8px' }} type="text" InputProps={{ endAdornment: (<MailIcon />) }} />
                </div>
                <div>
                    <TextField id="outlined-basic" label="Password" variant="outlined" style={{ width: '20rem', height: '4vh', margin: '2rem 3rem 1rem 3rem', borderRadius: '7px' }} type="password" InputProps={{ endAdornment: (<LockIcon />) }} />
                </div>
                <Router>
                    <div>
                        <Link to='/personalInfo' style={{ textDecoration: 'none' }}><h3 style={{ marginLeft: '12rem' }}>Login</h3></Link>
                    </div>
                </Router>
                <SocialApp>
                    <div> or continue with social profile</div>
                    <FontAwesomeIcon icon={faGoogle} style={{ margin: '1rem 1rem', fontSize: '1.5rem', cursor: 'pointer' }} />
                    <FontAwesomeIcon icon={faFacebook} style={{ margin: '1rem 1rem', fontSize: '1.5rem', cursor: 'pointer' }} />
                    <FontAwesomeIcon icon={faTwitter} style={{ margin: '1rem 1rem', fontSize: '1.5rem', cursor: 'pointer' }} />
                    <FontAwesomeIcon icon={faGithub} style={{ margin: '1rem 1rem', fontSize: '1.5rem', cursor: 'pointer' }} />
                    <div>Don't have an account yet? <Router><Link to='/signup' style={{ textDecoration: 'none' }}> Register</Link></Router></div>
                </SocialApp>
            </Login>
        </div>
    )
}
const Login = styled.div`
 background: #eeeef8;
 width: 30%;
 height: 70vh;
 margin: 7rem 30rem;
 border-radius: 15px;
 `
const SocialApp = styled.div`
margin-left: 6rem;
`

export default Signup

