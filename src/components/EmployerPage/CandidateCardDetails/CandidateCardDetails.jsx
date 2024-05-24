import './candidateCardDetails.scss';
import { IoClose } from 'react-icons/io5';
import CandidateCardExperience from '../CandidateCardExperience/CandidateCardExperience';
import defaultUserPic from '../../../assets/UserImage/default-user-pic.png';
import { FaClipboardCheck, FaRegEnvelope } from 'react-icons/fa';
import { FaClipboardUser } from 'react-icons/fa6';
import { LuFileBadge } from 'react-icons/lu';

const CandidateCardDetails = ({ hasTransitionedInDetails, showDetails, email, setShowDetails, experience, yearsOfExperience, position }) => {

  return (
    <>
        <div className={`candidateCardDetails ${hasTransitionedInDetails && 'in'} ${showDetails && 'visible'}`}>
            <IoClose className='candidateCardDetails__close' onClick={() => setShowDetails(false)} />

            <div className='candidate-card__header'>
            <img src={defaultUserPic} alt="profile pic" className='candidate-card__profile-picture'/>

            <div className='candidate-card__info'>
                <p className='candidate-card__position'>
                    {position ? position.replace(/\b\w/g, l => l.toUpperCase()) : 'Position not provided'}
                </p>

                <p className='candidate-card__years'>
                    {yearsOfExperience == 0 || yearsOfExperience == undefined ? `0 - 1 year of experience` : `${yearsOfExperience}+ years of experience`}
                </p>
                <p className='candidate-card__years candidate-card__years--short'>
                    {yearsOfExperience == 0 || yearsOfExperience == undefined ? `0 - 1 year...` : `${yearsOfExperience}+ years...`}
                </p>
            </div>
        </div>
            <a
                href={`mailto:${email}`}
                className='candidateCardDetails__email'
            >
                <FaRegEnvelope className='icon--envelope' />
                {email}
            </a>

            <div className='candidateCardDetails__cv'>
                <LuFileBadge className='icon--user' />
                Here will be button for downloading CV
            </div>

            <div className='candidateCardDetails-experience'>
                {Object.entries(experience).map((data, index) => {
                    return (
                        <CandidateCardExperience
                        data={data}
                        key={index}
                        />
                    )
                })}
            </div>
        </div>

        <div
            className={`candidateCardDetails__overlay ${hasTransitionedInDetails && 'in'} ${showDetails && 'visible'}`}
            onClick={() => setShowDetails(false)}
        >
        </div>
    </>
  )
}

export default CandidateCardDetails