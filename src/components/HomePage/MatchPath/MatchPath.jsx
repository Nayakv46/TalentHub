import './matchPath.scss';
import matchPath from '../../../assets/HomeImages/match-path.svg';

const MatchPath = () => {
  return (
    <div className='matchPath'>
        <div className='matchPath__column'>
            <h3 className='matchPath__title'>Revolution of recruitment</h3>
            <p className='matchPath__info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti earum et eos repudiandae. Fuga, quisquam error. Id amet, nesciunt earum sint perferendis</p>
            <img className='matchPath__image' src={matchPath} alt='matchPath' />
        </div>
        <div className='matchPath__column'>

        </div>
    </div>
  )
}

export default MatchPath