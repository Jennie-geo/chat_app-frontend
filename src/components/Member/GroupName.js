import styled from 'styled-components';
import List from '../SearchGroup/List';
import Search from '../SearchGroup/Search';

const GroupName = () => {
    return (
        <>
            <Search />
            <div style={{ overflow: 'scroll' }}>
                <Group>


                    <h2 value='groupName'>
                        Group Name: </h2>
                    <h2 value='groupMember'>
                        Group Members: <h6 style={{ marginTop: '1rem' }}>{<List />} </h6>
                    </h2>
                </Group>
            </div>
        </>
    )
}

const Group = styled.div`
width: 27rem;
height: 22rem;
padding-left: 2rem
`
export default GroupName
