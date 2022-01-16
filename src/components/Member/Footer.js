import styled from 'styled-components'

const Footer = () => {
    const submit = function () {
        console.log("button clicked submit")
    }
    return (
        <div>
            <Foot>
                <input style={{ width: '70%', margin: '0.5rem 5rem', height: '8vh', borderRadius: '5px' }} type='text' placeholder="let the chat begin" />

                <button style={{ width: '8rem', height: '8vh', fontSize: '25px', margin: '0.5rem -4rem', borderRadius: '5px', cursor: 'pointer' }} value='btn' onClick={submit}> Enter </button>
            </Foot>
        </div>
    )
}

const Foot = styled.div`
background: #999993;
color: white;
height: 33.5vh;
width: 100%;
`

export default Footer
