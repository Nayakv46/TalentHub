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

            </div>

            <div className='candidate__content'>

                <div className='candidate__content-info'>
                    <p className='candidate__content-text'>
                        Provide as many details as you can about your skills and experience. This will help us match you with the right employers.
                    </p>

                    <p className='candidate__content-text'>
                        Rate your skills from 0 to 5, where 0 is no knowledge and 5 is expert.
                    </p>

                    <p className='candidate__content-text'>
                        Add as many skills as you like. You can always come back and update your skills.
                    </p>

                    <p className='candidate__content-text'>
                        The more skills you add, the better the chances of finding the right job for you.
                    </p>
                </div>


                <CandidateForm />
            </div>

        </main>
        </CandidateContextProvider>
    )
}

export default Candidate