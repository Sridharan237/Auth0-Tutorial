import {useAuth0} from '@auth0/auth0-react';

const Profile = () => {
    const {user, isAuthenticated} = useAuth0();

    return (
        isAuthenticated && (
            <article className='column'>
                {user?.picture && <img src={user.picture} alt={user?.name} />}
                <h1>{user?.name}</h1>
                <ul>
                    {Object.keys(user).map((ObjectKey, index) => <li key={index}>{ObjectKey} : {user[ObjectKey]}</li>)}
                </ul>
            </article>
        )
    )
}

export default Profile;