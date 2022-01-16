import styled from 'styled-components'
import GroupMembers from './GroupMembers'
import GroupName from './GroupName'
import Footer from './Footer';
//import Header from './Header';

const Body = () => {
    return (
        <div>
            <FullBody>
                {/* <Header /> */}
                <Left>Left part of the chat
                    <GroupName />
                    <GroupMembers />
                </Left>
                <Right>Right part of the chat</Right>
            </FullBody>
            <Footer />
        </div>
    )
}
const FullBody = styled.div`
display: flex;
height: 55vh



`
const Left = styled.div`
width: 30%;
height: 55vh;
background: #eeeee8;

`
const Right = styled.div`
background: #eeeef8;
width: 60%;
color: black;
height: 55vh;
scroll
`
export default Body
