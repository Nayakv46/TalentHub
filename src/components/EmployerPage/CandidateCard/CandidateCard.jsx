import './candidateCard.scss';
import { useState } from 'react';
import { FaRegEnvelope } from 'react-icons/fa';
import useMountTransition from '../../../utils/useMountTransition';
import CandidateCardExperience from '../CandidateCardExperience/CandidateCardExperience';
import CandidateCardDetails from '../CandidateCardDetails/CandidateCardDetails';
import defaultUserPic from '../../../assets/UserImage/default-user-pic.png';

const CandidateCard = ({ index, email, experience, yearsOfExperience, position }) => {

    const [showDetails, setShowDetails] = useState(false);
    const hasTransitionedInDetails = useMountTransition(showDetails, 250);

    // filter out the top 3 experiences
    const topExperiences = Object.entries(experience).sort((a, b) => b[1] - a[1]).slice(0, 3);

    // length of extra experiences in object
    const experienceLength = Object.keys(experience).length - 3;

  return (
    <div className='candidate-card' key={index}>

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


        <div className='candidate-card__experience-wrapper'>
            {topExperiences.map((data, index) => {
                return (
                    <CandidateCardExperience
                        data={data}
                        key={index}
                    />
                )
            })}
        </div>

        <div className='candidate-card__more'>

            <button className='candidate-card__show-details' onClick={() => setShowDetails(!showDetails)}>
                <FaRegEnvelope className='icon--envelope' />More Info
            </button>

            {experienceLength > 0 && <p className='candidate-card__experience-more'>+ {experienceLength} more...</p>}
        </div>

        {(hasTransitionedInDetails || showDetails) &&
            <CandidateCardDetails
                hasTransitionedInDetails={hasTransitionedInDetails}
                showDetails={showDetails}
                email={email}
                setShowDetails={setShowDetails}
                experience={experience}
                yearsOfExperience={yearsOfExperience}
                position={position}
            />
        }

    </div>
  )
}

export default CandidateCard