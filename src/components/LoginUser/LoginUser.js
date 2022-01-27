import react from 'react';
import PropTypes from 'prop-types';
import './LoginUser.css';

export async function LoginUser() {
    return fetch("localhost:8887/api/v1/admin/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Credential)
    })
        .then(data => data.json())
}