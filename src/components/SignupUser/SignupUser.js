import { Axios } from "axios";

export default async function SignupUser(userCredentials) {
    Axios.post('localhost:8887/api/v1/user/create_user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userCredentials)
    }).then(data => data.json()
    )
}
