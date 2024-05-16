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
                    <div className='employer__content-info'>
                        <p>
                            After clicking submit you will see all results for now.
                        </p>

                        <p>
                            Don't worry, the full functionality will be added in the near future. Due to certain circumstances, project's development had to be halted for a few days. Please check back later and thank you for your patience.
                        </p>

                        <p>
                            Styling will also be applied in some time. Feel free to contact me for more information regarding this project.
                        </p>
                    </div>

                    <EmployerForm />
                </div>
            </main>
        </EmployerContextProvider>
    )
}

export default Candidate