import './employer.scss';
import { useAuth } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"
import { useEffect } from 'react';

const Candidate = () => {

    const { currentUser, userLoggedIn, userType } = useAuth();

    const navigateTo = useNavigate();

    useEffect(() => {
        if(!userLoggedIn || userType !== 'employer') {
            navigateTo('/auth/employer');
            return;
        }
    });
    return (
        <main className="employer">
            Hello {currentUser?.email}
            <br/>
            USERTYPE: {userType}
        </main>
    )
}

export default Candidate