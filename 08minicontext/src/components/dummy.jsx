import React, { useContext } from 'react' // useContext sahi imported hai
import UserContext from '../context/UserContext'

function Profile() {
    // userContext ko badal kar useContext kiya
    const { user } = useContext(UserContext)
    
    if (!user) return <div>Please login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile