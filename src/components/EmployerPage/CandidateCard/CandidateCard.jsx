import './candidateCard.scss';
import { useState } from 'react';
import { FaRegEnvelope } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import useMountTransition from '../../../utils/useMountTransition';

const CandidateCard = ({ key, email, experience }) => {

    const [showDetails, setShowDetails] = useState(false);
    const hasTransitionedInDetails = useMountTransition(showDetails, 250);

  return (
    <div className='candidate-card' key={key}>
        <p className='candidate-card__email'>
            {email}
        </p>

        <button className='candidate-card__show-details' onClick={() => setShowDetails(!showDetails)}>
            <FaRegEnvelope className='icon--envelope' />More Info
        </button>

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
            <div className={`candidate-card__details ${hasTransitionedInDetails && 'in'} ${showDetails && 'visible'}`}>
                <IoClose className='candidate-card__details-close' onClick={() => setShowDetails(false)} />
                <a href={`mailto:${email}`}>{email}</a>
                <p>Here will be button for downloading CV</p>
            </div>
        }
        {(hasTransitionedInDetails || showDetails) && <div className={`candidate-card__details-overlay ${hasTransitionedInDetails && 'in'} ${showDetails && 'visible'}`} onClick={() => setShowDetails(false)}></div>}
    </div>
  )
}

export default CandidateCard