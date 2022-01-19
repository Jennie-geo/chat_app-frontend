import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <div>
            <Head>
                <h1>Chat Group</h1>
                <Logout>
                    <Link to="/joinGroup" value='leaveRoom' style={{ textDecoration: "none", color: "silver" }}>Leave Room</Link>
                </Logout>
            </Head>
        </div>
    )
}
const Head = styled.div`
color: silver;
background: #999993;
width: 100%;
height: 5%;
padding: 5px;
margin: 0px;
display: flex;
justify-content: space-between;

`
const Logout = styled.h3`
background: white;
margin-right: 3%; 
cursor: pointer;
border-radius: 5px;
padding: 5px;
opacity: 0.5;



`
export default Header
