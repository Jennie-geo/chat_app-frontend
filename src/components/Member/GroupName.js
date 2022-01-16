import styled from 'styled-components';

const GroupName = () => {
    return (
        <div>
            <Group>
                <h2 value='groupName'>Group Name: </h2>
            </Group>
        </div>
    )
}

const Group = styled.div`
margin-left: 2rem;
`
export default GroupName
