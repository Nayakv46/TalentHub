import './matchPath.scss';
import matchPath from '../../../assets/HomeImages/match-path.svg';
import MatchContentBox from '../MatchContentBox/MatchContentBox';

const MatchPath = () => {
  return (
    <div className='matchPath'>
        <div className='matchPath__column'>
            <h3 className='matchPath__title'>Revolution of recruitment</h3>
            <p className='matchPath__info'>Join our movement to revolutionize the way you find a job. Simply fill out a form and start receiving life-changing offers from employers who value your skills!</p>
            <img className='matchPath__image' src={matchPath} alt='matchPath' />
        </div>
        <div className='matchPath__column'>
            <div className='matchPath__blob'></div>
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