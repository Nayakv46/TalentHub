import './homePage.scss';
import { Link } from 'react-router-dom';
import AnimatedBlocks from '../../components/HomePage/AnimatedBlocks/AnimatedBlocks';

const HomePage = () => {
  return (
    <main className='home'>
        <div className='home__hero'>

            <div className='home__content'>
                <div className='home__text'>
                    <h2 className='home__title'>
                        Find your <span className='home__title--span gradient-color blue'>perfect</span> match
                    </h2>

                    <p className='home__info'>Effortless browsing for your new workers with next-gen job finding.</p>
                </div>

                <div className='home__cta'>
                    <Link to="/employer" className='home__cta--button'>I&apos;m an Employer</Link>
                    <Link to="/candidate" className='home__cta--button'>I&apos;m a Candidate</Link>
                </div>
            </div>
            <AnimatedBlocks />
        </div>
    </main>
  )
}

export default HomePage