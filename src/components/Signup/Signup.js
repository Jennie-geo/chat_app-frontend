import React, { Fragment } from 'react'
import styled from 'styled-components'
import { AccessAlarm, LightMode, ThreeDRotation } from '@mui/icons-material';
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';
import { TextField } from '@mui/material';
//import './Signups.css';
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
        <Fragment style={{ padding: '3rem' }}>
            <Header>
                <div className='input_field' >
                    <TextField id="outlined-basic" label="FullName" variant="outlined" style={{ width: '20rem', height: '4vh', margin: '10rem 3rem 1rem 3rem', borderRadius: '8px' }} type='name' placeholder='Name' />
                </div>
                <div>
                    <TextField id="outlined-basic" label="Email" variant="outlined" style={{ width: '20rem', height: '4vh', margin: '2rem 3rem 1rem 3rem', borderRadius: '8px' }} type="text" InputProps={{ endAdornment: (<MailIcon />) }} />
                </div>
                <div>
                    <TextField id="outlined-basic" label="Password" variant="outlined" style={{ width: '20rem', height: '4vh', margin: '2rem 3rem 1rem 3rem', borderRadius: '7px' }} type="password" InputProps={{ endAdornment: (<LockIcon />) }} />
                </div>
                <div>
                    <Link to='/login' style={{ textDecoration: 'none' }}><h3 style={{ marginLeft: '12rem' }}>SignUp</h3></Link>
                </div>
                <Social>
                    <p>or continue with social profile</p>
                    <FontAwesomeIcon icon={faGoogle} style={{ marginLeft: '1.5rem', fontSize: '1.5rem', cursor: 'pointer' }} />
                    <FontAwesomeIcon icon={faFacebook} style={{ marginLeft: '1.5rem', fontSize: '1.5rem', cursor: 'pointer' }} />
                    <FontAwesomeIcon icon={faTwitter} style={{ marginLeft: '1.5rem', fontSize: '1.5rem', cursor: 'pointer' }} />
                    <FontAwesomeIcon icon={faGithub} style={{ marginLeft: '1.5rem', fontSize: '1.5rem', cursor: 'pointer' }} />
                    <p>Already a member?<Link to='/login' style={{ textDecoration: 'none' }}> Login</Link></p>
                </Social>
            </Header>
        </Fragment>
    )
}
const Header = styled.div`
 background: #eeeef8;
 width: 30%;
 height: 70vh;
 margin: 7rem 30rem;
 border-radius: 15px;
 `
const Social = styled.p`
margin-left: 6rem;
`

export default Signup
