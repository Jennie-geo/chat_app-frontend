import React from 'react'
import { Link } from 'react-router-dom';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import "./Edit.css";

const Edit = ({ name, photo, email, phone }) => {
    return (
        <div >
            <div className='profileIcon'>
                <div style={{ marginRight: '1rem' }}>{photo} myphoto</div>
                <div>{name} myname </div>
                <div className='icon'>{<ArrowDropDownOutlinedIcon />}
                </div>
            </div>
            <div className='editPersonalProfile'>
                <div style={{ fontSize: '30px', marginBottom: '2rem' }}>Change Infor</div>
                <div className='img' style={{ marginBottom: '3rem' }}>{photo} change photo</div>
                <div>
                    <div>Name</div>
                    <div ><input className='input' type="text" placeholder='Enter your name...' /> </div>
                </div>
                <div>
                    <div>Bio</div>
                    <div><input className='bioinput' type="text" placeholder='Enter your bio...' /></div>
                </div>
                <div>
                    <div>Phone</div>
                    <div><input className='input' type="text" placeholder='Enter your phone...' /></div>
                </div>
                <div>
                    <div>Email</div>
                    <div><input className='input' type="text" placeholder='Enter your email...' /></div>
                </div>
                <div>
                    <div>Password</div>
                    <div><input className='input' type="password" placeholder='Enter your password...' /></div>
                </div>
                <Link to="/personalInfo" className="btn">Save</Link>
            </div>
        </div>
    )
}

export default Edit
