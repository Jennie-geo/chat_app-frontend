import styled from 'styled-components'

const GroupMembers = () => {
    return (
        <div>
            <Member>
                <h3 value='member'>Group Members</h3>
            </Member>
        </div>
    )
}

const Member = styled.div`
color: red;
margin: 5rem 0rem 0rem 2rem;

`
export default GroupMembers
