import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import { AccessAlarm, LightMode, ThreeDRotation } from '@mui/icons-material';
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';
import { TextField } from '@mui/material';
import SignupUser from '../SignupUser/SignupUser';
import './Signups.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGoogle,
    faFacebook,
    faTwitter,
    faGithub
} from '@fortawesome/free-brands-svg-icons'

const Signup = () => {
    //state for user registration
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault()
        const registerUser = await SignupUser({
            name: name,
            email: email,
            password: password
        })
        registerUser.save().then(response => console.log(response))
            .catch(err => console.log(err))
    }

    //state for success or errror message
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    //handle name change
    const handleName = (e) => {
        setName(e.target.value)
        setSubmitted(false)
    }

    //handle email change
    const handleEmail = (e) => {
        setEmail(e.target.value)
        setSubmitted(false)
    }

    //handle password change
    const handlePassword = (e) => {
        setPassword(e.target.value)
        setSubmitted(false)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (name === '' || email === '' || password === '') {
            setError(true)
        } else {
            setSubmitted(true)
            setError(false);
        }
    }
    //show success message
    const successMessage = () => {
        return (
            <div className='success'
                style={{
                    display: submitted ? '' : 'none'
                }}>
                <h5>Welcome {name}, you have successfully SignUp.</h5>
            </div>
        )
    }
    //show error message
    const errorMessage = () => {
        return (
            <div className='error'
                style={{ display: error ? '' : 'none' }}>
                <h5>Please, fill in all the fields.</h5>
            </div>
        )
    }

    return (
        <Fragment>
            <form action="/login" method='post' style={{ padding: '3rem' }} onSubmit={handleSignup}>
                <Header>
                    <div className='messages'>
                        {successMessage()}
                        {errorMessage()}
                    </div>
                    <div className='input_field' >
                        <TextField id="outlined-basic" label="FullName" variant="outlined" style={{ width: '20rem', height: '4vh', margin: '6rem 3rem 1rem 3rem', borderRadius: '8px' }} value={name} type='name' placeholder='Name' onChange={handleName} />
                    </div>
                    <div>
                        <TextField id="outlined-basic" label="Email" variant="outlined" style={{ width: '20rem', height: '4vh', margin: '2rem 3rem 1rem 3rem', borderRadius: '8px' }} value={email} type="text" InputProps={{ endAdornment: (<MailIcon />) }} onChange={handleEmail} />
                    </div>
                    <div>
                        <TextField id="outlined-basic" label="Password" variant="outlined" style={{ width: '20rem', height: '4vh', margin: '2rem 3rem 1rem 3rem', borderRadius: '7px' }} value={password} type="password" InputProps={{ endAdornment: (<LockIcon />) }} onChange={handlePassword} />
                    </div>

                    <div>
                        <Link to='/login' onClick={handleSubmit} style={{ textDecoration: 'none' }}><h3 style={{ marginLeft: '12rem' }}>SignUp</h3></Link>
                    </div>


                    <Social>
                        <div>or continue with social profile</div>
                        <FontAwesomeIcon icon={faGoogle} style={{ marginLeft: '1.5rem', fontSize: '1.5rem', cursor: 'pointer' }} />
                        <FontAwesomeIcon icon={faFacebook} style={{ marginLeft: '1.5rem', fontSize: '1.5rem', cursor: 'pointer' }} />
                        <FontAwesomeIcon icon={faTwitter} style={{ marginLeft: '1.5rem', fontSize: '1.5rem', cursor: 'pointer' }} />
                        <FontAwesomeIcon icon={faGithub} style={{ marginLeft: '1.5rem', fontSize: '1.5rem', cursor: 'pointer' }} />
                        <div> Already a member?<Link to='/login' style={{ textDecoration: 'none' }}> Login</Link></div>
                    </Social>
                </Header>
            </form>
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
