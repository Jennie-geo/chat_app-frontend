import React from 'react'
import { Link } from 'react-router-dom';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import User from '../User'
import './PersonalInfo.css';

const PersonalInfo = (props) => {
    return (
        <>
            {User.map((user) => (
                <div key={user.id}>

                    <div className='body'>
                        {/* <div style={{ marginRight: '1rem' }}>{user.photo}</div> */}
                        <div>{user.firstName} </div>
                        <div className='icon'>{<ArrowDropDownOutlinedIcon />}
                        </div>
                    </div>
                    <div className='profileInfo'>
                        <div className='title_info'>Personal info</div>
                        <div className='user_info'>


                            <div className='profile_header'>
                                <div>Welcome {user.firstName}.</div>
                                <div><Link to="/edit" style={{ textDecoration: 'none', fontSize: '18px', width: '15rem', height: '7rem', borderRadius: '5px', background: '#2f80ed', padding: '0.7rem', color: 'black' }}>Edit</Link></div>
                            </div>
                            {/* <div className="userDetail">
                                <div>PHOTO </div>
                                <div className='left'>{user.photo} is my photo</div>

                            </div> */}
                            <div className="userDetail">
                                <div>First Name</div>
                                <div className='left'>{user.firstName}</div>
                            </div>
                            <div className="userDetail">
                                <div>Last Name</div>
                                <div className='left'>{user.lastName}</div>
                            </div>
                            <div className="userDetail">
                                <div>Bio</div>
                                <div className='left' style={{ marginRight: '22px' }}> {user.bio}</div>
                            </div>
                            <div className="userDetail">
                                <div>PHONE</div>
                                <div className='left' style={{ marginLeft: '18px' }}> {user.phone}</div>
                            </div>
                            <div className="userDetail">
                                <div>EMAIL</div>
                                <div style={{ marginRight: '20px' }}>{user.email}</div>
                            </div>
                            {/* <div className="userDetail">
                                <div>PASSWORD</div>
                                <div style={{ marginLeft: '8px' }}>{user.password} is my password</div>
                            </div> */}
                            <div className="createdBy">created by {user.firstName}</div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default PersonalInfo
