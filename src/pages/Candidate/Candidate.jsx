import './candidate.scss';
import { useAuth } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"
import { useEffect } from 'react';
import CandidateForm from '../../components/CandidatePage/CandidateForm/CandidateForm';
import { CandidateContextProvider } from '../../context/CandidateContext';

const Candidate = () => {

    const { currentUser, userLoggedIn, userType } = useAuth();

    const navigateTo = useNavigate();

    useEffect(() => {
        if(!userLoggedIn || userType !== 'candidate') {
            navigateTo('/auth/candidate');
            return;
        }
    });


    return (
        <CandidateContextProvider>
        <main className="candidate">

            <div className='candidate__header'>

                <p className='candidate__user'>
                    Hello, {currentUser?.displayName ? currentUser.displayName : currentUser?.email}
                </p>

                <h4 className='candidate__title'>
                    Tell us about yourself
                </h4>

                <CandidateForm />
            </div>

        </main>
        </CandidateContextProvider>
    )
}

export default Candidate