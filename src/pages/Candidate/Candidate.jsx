import './candidate.scss';
import { useState, useEffect } from 'react';
import loginPic1 from '../../assets/LoginImages/login-pic1.jpg';

const Candidate = () => {
    const [toggleImage, setToggleImage] = useState();



    useEffect(() => {
        // random number between 0 and 2
        const randomNumber = Math.floor(Math.random() * 3);

        switch(randomNumber){
            case 0:
                return setToggleImage(loginPic1);
            case 1:
                return setToggleImage(loginPic1);
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

            <div className='candidate__form'>

            </div>
        </div>
    </div>
  )
}

export default Candidate