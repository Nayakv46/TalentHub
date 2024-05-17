import './candidateCardDetails.scss';
import { IoClose } from 'react-icons/io5';
import CandidateCardExperience from '../CandidateCardExperience/CandidateCardExperience';

const CandidateCardDetails = ({ hasTransitionedInDetails, showDetails, email, setShowDetails, experience }) => {

  return (
    <>
        <div className={`candidateCardDetails ${hasTransitionedInDetails && 'in'} ${showDetails && 'visible'}`}>
            <IoClose className='candidateCardDetails__close' onClick={() => setShowDetails(false)} />

            <a
                href={`mailto:${email}`}
                className='candidateCardDetails__email'
            >
                {email}
            </a>

            <p>Here will be button for downloading CV</p>

            {Object.entries(experience).map((data, index) => {
                return (
                    <CandidateCardExperience
                        data={data}
                        key={index}
                    />
                )
            })}
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