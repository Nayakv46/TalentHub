import './candidateCard.scss';
import { useState } from 'react';
import { FaRegEnvelope } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import useMountTransition from '../../../utils/useMountTransition';
import CandidateCardExperience from '../CandidateCardExperience/CandidateCardExperience';
import CandidateCardDetails from '../CandidateCardDetails/CandidateCardDetails';

const CandidateCard = ({ index, email, experience }) => {

    const [showDetails, setShowDetails] = useState(false);
    const hasTransitionedInDetails = useMountTransition(showDetails, 250);

    // filter out the top 3 experiences
    const topExperiences = Object.entries(experience).sort((a, b) => b[1] - a[1]).slice(0, 3);

    // length of extra experiences in object
    const experienceLength = Object.keys(experience).length - 3;

  return (
    <div className='candidate-card' key={index}>
        <p className='candidate-card__email'>
            {email}
        </p>

        <button className='candidate-card__show-details' onClick={() => setShowDetails(!showDetails)}>
            <FaRegEnvelope className='icon--envelope' />More Info
        </button>

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

        {experienceLength > 0 && <p className='candidate-card__experience-more'>+ {experienceLength} more...</p>}

        <div className='candidate-card__exp-wrapper'>
            {Object.entries(experience).map((data, index) => {
                return (
                    <div className='candidate-card__experience' key={index}>
                        <p className='candidate-card__experience-title'>
                            {data[0].charAt(0).toUpperCase() + data[0].slice(1)}
                        </p>

                        <span className={`candidate-card__experience-level level-${data[1]}`}></span>
                    </div>
                )
            })}
        </div>

        {(hasTransitionedInDetails || showDetails) &&
            <CandidateCardDetails
                hasTransitionedInDetails={hasTransitionedInDetails}
                showDetails={showDetails}
                email={email}
                setShowDetails={setShowDetails}
                experience={experience}
            />
        }

    </div>
  )
}

export default CandidateCard