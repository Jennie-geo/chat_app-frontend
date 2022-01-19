import User from '../User';

function List() {
    return <div>
        {User.map((user, index) => {
            return (
                <div key={index}>
                    <p style={{ width: '12rem', height: '0.5rem', background: '#cbced4', padding: '1rem', borderRadius: '50px' }}>{user.first_name}</p>
                </div>
            )
        })}
    </div>

}


export default List