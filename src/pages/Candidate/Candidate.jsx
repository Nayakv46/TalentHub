import './candidate.scss';
import { useState, useEffect } from 'react';
import loginPic1 from '../../assets/LoginImages/login-pic1.jpg';
import loginPic2 from '../../assets/LoginImages/login-pic2.jpg';
import EmailRegister from '../../components/EmailRegister/EmailRegister';
import GoogleAuth from '../../components/GoogleAuth/GoogleAuth';

const Candidate = () => {
    const [toggleImage, setToggleImage] = useState();

    const [formState, setFormState] = useState(false);

    useEffect(() => {
        // random number between 0 and 2
        const randomNumber = Math.floor(Math.random() * 3);

        switch(randomNumber){
            case 0:
                return setToggleImage(loginPic1);
            case 1:
                return setToggleImage(loginPic2);
            case 2:
                return setToggleImage(loginPic1);
        }
    }, []);

  return (
    <div className='candidate'>
        <img src={toggleImage} alt='loginPic1' className='candidate__image'/>
        <div className='candidate__overlay'></div>

        <div className='candidate__content'>
            <div className='candidate__bg1'></div>
            <div className='candidate__bg2'></div>

        </div>
            <div className='candidate__form'>

                <div className={`candidate__form-group ${formState && `candidate__form-group--swap` }`}>

                    <div className='candidate__login'>
                        <h4 className='candidate__title'>Log into an account</h4>
                        <EmailRegister userType='candidate'/>
                        <GoogleAuth userType='candidate'/>

                        <button
                            className='candidate__swap'
                            onClick={() => setFormState(!formState)}
                        >
                            Create an account
                        </button>
                    </div>

                    <div className='candidate__register'>
                        <h4 className='candidate__title'>Register an account</h4>
                        <EmailRegister userType='candidate'/>
                        <GoogleAuth userType='candidate'/>

                        <button
                            className='candidate__swap'
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