import './LoginUser.css';

export default async function LoginUser(credentials) {
    return fetch("localhost:8887/api/v1/admin/login", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
    }).then(data => data.json())
}