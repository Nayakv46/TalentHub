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
                    <div className='employer__header'>
                        <p className='employer__header-user'>
                            Hello, {currentUser?.email}
                        </p>
                        {/* <p className='employer__header-userType'>
                            USERTYPE: {userType}
                        </p> */}
                        <h4 className='employer__header-title'>
                            Who are you looking for?
                        </h4>
                    </div>
                <div className='employer__content'>

                    <EmployerForm />
                </div>
            </main>
        </EmployerContextProvider>
    )
}

export default Candidate