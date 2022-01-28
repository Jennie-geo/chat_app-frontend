import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { AccessAlarm, LightMode, ThreeDRotation } from '@mui/icons-material';
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';
// import { BrowserRouter as Router } from 'react-router-dom';
import { TextField } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PropTypes } from 'prop-types';
//import LoginUser from '../LoginUser/LoginUser';
import { AuthContext } from '../context/authContext';
import Api from '../../Axios';
import {
    faGoogle,
    faFacebook,
    faTwitter,
    faGithub
} from '@fortawesome/free-brands-svg-icons'

export default function Login({ setToken }) {
    // const Login = ({setToken}) => {
    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     const token = await LoginUser({ email, password });
    //     console.log(token)
    //     setToken(token);
    // }
    const { setAuthState } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');
    const [state, setState] = useState({
        email: "",
        password: ""
    })
    const isInvalid = state.email === "" || state.password === "";
    const history = useNavigate()

    function getToSignup() {
        history.push('/signup')
    }
    const updateState = (key, value) => {
        setState({
            ...state,
            [key]: value
        })
    }

    const login = async (e) => {
        e.preventDefault();
        Api.post('/user/login', state).then(response => {
            const output = response.data.token
            setAuthState(output);
            console.log("Response", output);
            history.push('/personalInfo')
        }).catch((error) => {
            if (error) {
                setErrorMessage(error.response.data.message)
            }
        })
    }

    return (
        <div style={{ padding: '3rem' }}>
            <form>
                <Logins>
                    <div>{errorMessage}</div>
                    <div>
                        <TextField id="email" label="Email" variant="outlined" style={{ width: '20rem', height: '4vh', margin: '10rem 3rem 1rem 3rem', borderRadius: '8px' }} type="text" name="email" InputProps={{ endAdornment: (<MailIcon />) }} value={state.value} onChange={e => updateState(e.currentTarget.value)} />
                    </div>
                    <div>
                        <TextField id="password" label="Password" variant="outlined" style={{ width: '20rem', height: '4vh', margin: '2rem 3rem 1rem 3rem', borderRadius: '7px' }} type="password" name="password" InputProps={{ endAdornment: (<LockIcon />) }} value={state.value} onChange={e => updateState(e.currentTarget.value)} />
                    </div>
                    <div>
                        <Link to='/personalInfo' style={{ textDecoration: 'none' }}><h3 style={{ marginLeft: '12rem' }} onClick={login}>Login</h3></Link>
                    </div>
                    <div className='forgetPassword'><Link to='/forgetPassword'>Forgot Password?</Link></div>
                    <SocialApp>
                        <div> or continue with social profile</div>
                        <FontAwesomeIcon icon={faGoogle} style={{ margin: '1rem 1rem', fontSize: '1.5rem', cursor: 'pointer' }} />
                        <FontAwesomeIcon icon={faFacebook} style={{ margin: '1rem 1rem', fontSize: '1.5rem', cursor: 'pointer' }} />
                        <FontAwesomeIcon icon={faTwitter} style={{ margin: '1rem 1rem', fontSize: '1.5rem', cursor: 'pointer' }} />
                        <FontAwesomeIcon icon={faGithub} style={{ margin: '1rem 1rem', fontSize: '1.5rem', cursor: 'pointer' }} />
                        <div>Don't have an account yet? <NavLink to='/signup' style={{ textDecoration: 'none' }} onClick={getToSignup}> Register</NavLink></div>
                    </SocialApp>
                </Logins >

            </form>
        </div >
    )
}
// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
// }

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

