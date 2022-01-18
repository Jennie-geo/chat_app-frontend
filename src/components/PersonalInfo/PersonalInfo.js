import React from 'react'
import { Link } from 'react-router-dom';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import User from '../User'
import './PersonalInfo.css';

const PersonalInfo = ({ photo, name, bio, phone, email, password }) => {

    return (
        <>

            <div className='body'>
                <div style={{ marginRight: '1rem' }}>{photo} myphoto</div>
                <div>{name} myname </div>
                <div className='icon'>{<ArrowDropDownOutlinedIcon />}
                </div>
            </div>
            <div className='profileInfo'>
                <div className='title_info'>Personal info</div>
                <div className='user_info'>
                    <div className='profile_header'>
                        <div>{name} Profile</div>
                        <div><Link to="/edit" style={{ textDecoration: 'none', fontSize: '18px', width: '15rem', height: '7rem', borderRadius: '5px', background: '#2f80ed', padding: '0.7rem', color: 'black' }}>Edit</Link></div>
                    </div>
                    <div className="userDetail">
                        <div>PHOTO </div>
                        <div className='left'>{photo} is my photo</div>

                    </div>
                    <div className="userDetail">
                        <div>NAME</div>
                        <div className='left'>{name} is my name</div>
                    </div>
                    <div className="userDetail">
                        <div>Bio</div>
                        <div className='left' style={{ marginRight: '22px' }}> {bio} is my bio </div>
                    </div>
                    <div className="userDetail">
                        <div>PHONE</div>
                        <div className='left' style={{ marginLeft: '18px' }}> {phone} is my number</div>
                    </div>
                    <div className="userDetail">
                        <div>EMAIL</div>
                        <div style={{ marginRight: '20px' }}>{email} is my email</div>
                    </div>
                    <div className="userDetail">
                        <div>PASSWORD</div>
                        <div style={{ marginLeft: '8px' }}>{password} is my password</div>
                    </div>
                    <div className="createdBy">created by username</div>
                </div>

            </div>
        </>
    )
}

export default PersonalInfo
