import './homePage.scss';
import MatchPath from '../../components/HomePage/MatchPath/MatchPath';
import Hero from '../../components/HomePage/Hero/Hero';

const HomePage = () => {
  return (
    <main className='home'>
        <Hero />

        <MatchPath />
    </main>
  )
}

export default HomePage