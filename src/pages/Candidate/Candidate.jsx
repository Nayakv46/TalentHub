import './candidate.scss';
import { useAuth } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"
import { useEffect } from 'react';

const Candidate = () => {

    const { currentUser, userLoggedIn, userType } = useAuth();

    const navigateTo = useNavigate();

    useEffect(() => {
        if(!userLoggedIn || userType !== 'candidate') {
            navigateTo('/auth/candidate');
            return;
        }
    }, []);
    return (
        <div className="candidate">
            Hello, {currentUser?.displayName ? currentUser.displayName : currentUser?.email}
            <br/>
            USERTYPE: {userType}
        </div>
    )
}

export default Candidate