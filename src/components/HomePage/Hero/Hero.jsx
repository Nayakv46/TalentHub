import './hero.scss';
import { Link } from 'react-router-dom';
import AnimatedBlocks from '../AnimatedBlocks/AnimatedBlocks';
import { useAuth } from '../../../context/AuthContext'

const Hero = () => {

    // CREATE EMPLOYER REGISTER PAGE
    // LET THE REGISTER PAGES BE STH LIKE /register/candidate and /register/employer
    // DASHBOARD WILL BE /candidate and /employer
    // AFTER SUCCESSFUL REGISTER, REDIRECT
    // Create login forms

    const { currentUser, userLoggedIn, userType } = useAuth();

  return (
    <div className='hero'>

            <div className='hero__content'>
                <div className='hero__text'>
                    <h2 className='hero__title'>
                        Find your <span className='hero__title--span gradient-color blue'>perfect</span> match
                    </h2>

                    <p className='hero__info'>Effortless browsing for your new workers with next-gen job finding.</p>
                </div>

                <div className='hero__cta'>
                    <Link to={userLoggedIn && userType == 'employer' ? "/employer" : "/auth/employer"} className='hero__cta--button'>I&apos;m an Employer</Link>
                    <Link to={userLoggedIn && userType == 'candidate' ? `/candidate` : `/auth/candidate`} className='hero__cta--button'>I&apos;m a Candidate</Link>
                </div>

                <div className='hero__blob'></div>
            </div>
            <AnimatedBlocks />
        </div>
  )
}

export default Hero