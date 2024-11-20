import './authEmployer.scss';
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


const AuthEmployer = () => {
    const [toggleImage, setToggleImage] = useState();

    const [formState, setFormState] = useState(false);

    const { userLoggedIn, userType } = useAuth();
    const navigateTo = useNavigate();

    useEffect(() => {

        if(userLoggedIn && userType === 'employer') {
            navigateTo('/employer');
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
    }, [userLoggedIn, userType]);

  return (
    <div className='auth-employer'>
        <img src={toggleImage} alt='loginPic1' className='auth-employer__image'/>
        <div className='auth-employer__overlay'></div>

        <div className='auth-employer__content'>
            <div className='auth-employer__bg1'></div>
            <div className='auth-employer__bg2'></div>

        </div>
            <div className='auth-employer__form'>

                <div className={`auth-employer__form-group ${formState && `auth-employer__form-group--swap` }`}>

                    <div className='auth-employer__login'>
                        <h4 className='auth-employer__title'>Login to an account</h4>
                        <EmailLogin userType='employer'/>
                        <p>or</p>
                        <GoogleAuth userType='employer'/>

                        <button
                            className='auth-employer__swap-btn'
                            onClick={() => setFormState(!formState)}
                        >
                            Create an account
                        </button>
                    </div>

                    <div className='auth-employer__register'>
                        <h4 className='auth-employer__title'>Register an account</h4>
                        <EmailRegister userType='employer'/>
                        <p>or</p>
                        <GoogleAuth userType='employer'/>

                        <button
                            className='auth-employer__swap-btn'
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

export default AuthEmployer