import './authCandidate.scss';
import { useState, useEffect } from 'react';
import loginPic1 from '../../../assets/LoginImages/login-pic1.jpg';
import loginPic2 from '../../../assets/LoginImages/login-pic2.jpg';
import loginPic3 from '../../../assets/LoginImages/login-pic3.jpg';
import loginPic4 from '../../../assets/LoginImages/login-pic4.jpg';
import loginPic5 from '../../../assets/LoginImages/login-pic5.jpg';
import EmailRegister from '../../../components/EmailRegister/EmailRegister';
import GoogleAuth from '../../../components/GoogleAuth/GoogleAuth';
import EmailLogin from '../../../components/EmailLogin/EmailLogin';
import { useAuth } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const Candidate = () => {
    const [toggleImage, setToggleImage] = useState();

    const [formState, setFormState] = useState(false);

    // CREATE EMAILLOGIN COMPONENT
    // INSERT IT SOMEWHERE HERE AS THE LEFT ONE
    // THEN GO FOR CANDIDATE FORM FOR SKILLS AND EXPERIENCE
    // AND EMPLOYER FORM QUERYING FOR SKILLS AND EXPERIENCE AND SHOWING POTENTIAL CANDIDATES

    const { userLoggedIn, userType } = useAuth();
    const navigateTo = useNavigate();

    useEffect(() => {

        if(userLoggedIn && userType === 'candidate') {
            navigateTo('/');
            return;
        }

        // random number between 0 and 5
        const randomNumber = Math.floor(Math.random() * 5);

        switch(randomNumber){
            case 0:
                return setToggleImage(loginPic1);
            case 1:
                return setToggleImage(loginPic2);
            case 2:
                return setToggleImage(loginPic3);
            case 3:
                return setToggleImage(loginPic4);
            case 4:
                return setToggleImage(loginPic5);
        }
    }, []);

  return (
    <div className='auth-candidate'>
        <img src={toggleImage} alt='loginPic1' className='auth-candidate__image'/>
        <div className='auth-candidate__overlay'></div>

        <div className='auth-candidate__content'>
            <div className='auth-candidate__bg1'></div>
            <div className='auth-candidate__bg2'></div>

        </div>
            <div className='auth-candidate__form'>

                <div className={`auth-candidate__form-group ${formState && `auth-candidate__form-group--swap` }`}>

                    <div className='auth-candidate__login'>
                        <h4 className='auth-candidate__title'>Log into an account</h4>
                        <EmailLogin userType='candidate'/>
                        <p>or</p>
                        <GoogleAuth userType='candidate'/>

                        <button
                            className='auth-candidate__swap-btn'
                            onClick={() => setFormState(!formState)}
                        >
                            Create an account
                        </button>
                    </div>

                    <div className='auth-candidate__register'>
                        <h4 className='auth-candidate__title'>Register an account</h4>
                        <EmailRegister userType='candidate'/>
                        <p>or</p>
                        <GoogleAuth userType='candidate'/>

                        <button
                            className='auth-candidate__swap-btn'
                            onClick={() => setFormState(!formState)}
                        >
                            Already have an account?
                        </button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Candidate