import './matchPath.scss';
import matchPath from '../../../assets/HomeImages/match-path.svg';
import MatchContentBox from '../MatchContentBox/MatchContentBox';

const MatchPath = () => {
  return (
    <div className='matchPath'>
        <div className='matchPath__column'>
            <h3 className='matchPath__title'>Revolution of recruitment</h3>
            <p className='matchPath__info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti earum et eos repudiandae. Fuga, quisquam error. Id amet, nesciunt earum sint perferendis</p>
            <img className='matchPath__image' src={matchPath} alt='matchPath' />
        </div>
        <div className='matchPath__column'>
            <MatchContentBox
                icon="path"
                title="Convenience for both parties"
                info ="Simplicity and ease of use for both employers and candidates"
            />
            <MatchContentBox 
                icon="level"
                title="Fast and efficient"
                info ="Quick and easy way to find your perfect match"
            />
            <MatchContentBox
                icon="tick"
                title="Proven results"
                info ="More than thousands of satisfied users finding their ideal work partners"
            />
        </div>
    </div>
  )
}

export default MatchPath