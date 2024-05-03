import './employer.scss';
import { useAuth } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"
import { useEffect } from 'react';
import EmployerForm from '../../components/EmployerPage/EmployerForm/EmployerForm';
import { EmployerContextProvider } from '../../context/EmployerContext';

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
        <EmployerContextProvider>
            <main className="employer">
                Hello {currentUser?.email}
                <br/>
                USERTYPE: {userType}

                <EmployerForm />
            </main>
        </EmployerContextProvider>
    )
}

export default Candidate