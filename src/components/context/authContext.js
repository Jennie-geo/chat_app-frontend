import react, { useState, useContext, createContext } from 'react'

const defaultName = {
    authState: { token: "" },
    isAuthenticated: () => false,
    setAuthState: () => console.log('hello')
}

const AuthContext = createContext(defaultName);
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
    const token = localStorage.getItem('token');
    const [authState, setAuthState] = useState({
        token: token ? token : null
    })

    const isAuthenticated = () => {
        if (!authState.token) {
            return false
        } else {
            return true
        }
    }
    const setToken = (data) => {
        localStorage.setItem('token', data)

        setAuthState({ token: data })
    }
    return (
        <Provider
            value={{
                authState,
                setAuthState: (token) => setToken(token),
                isAuthenticated
            }}
        > {children}

        </Provider>
    )
}

export { AuthContext, AuthProvider }














// import { Axios } from "axios";

// export default async function SignupUser(userCredentials) {
//     Axios.post('localhost:8887/api/v1/user/create_user', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(userCredentials)
//     }).then(data => data.json()
//     )
// }
