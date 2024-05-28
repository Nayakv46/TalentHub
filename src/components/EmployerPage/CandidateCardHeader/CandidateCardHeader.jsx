import './candidateCardHeader.scss';
import defaultUserPic from '../../../assets/UserImage/default-user-pic.png';

const CandidateCardHeader = ({ position, yearsOfExperience }) => {
  return (
    <div className='candidateCardHeader'>
            <img src={defaultUserPic} alt="profile pic" className='candidateCardHeader__profile-picture'/>

            <div className='candidateCardHeader__info'>
                <p className='candidateCardHeader__position'>
                    {position ? position.replace(/\b\w/g, l => l.toUpperCase()) : 'Position not provided'}
                </p>

                <p className='candidateCardHeader__years'>
                    {yearsOfExperience == 0 || yearsOfExperience == undefined ? `0 - 1 year of experience` : `${yearsOfExperience}+ years of experience`}
                </p>
                <p className='candidateCardHeader__years candidateCardHeader__years--short'>
                    {yearsOfExperience == 0 || yearsOfExperience == undefined ? `0 - 1 year...` : `${yearsOfExperience}+ years...`}
                </p>
            </div>
        </div>
  )
}

export default CandidateCardHeader