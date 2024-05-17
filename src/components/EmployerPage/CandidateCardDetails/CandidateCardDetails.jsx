import './candidateCardDetails.scss';
import { IoClose } from 'react-icons/io5';

const CandidateCardDetails = ({ hasTransitionedInDetails, showDetails, email, setShowDetails }) => {

  return (
    <>
        <div className={`candidateCardDetails ${hasTransitionedInDetails && 'in'} ${showDetails && 'visible'}`}>
            <IoClose className='candidateCardDetails__close' onClick={() => setShowDetails(false)} />
            <a href={`mailto:${email}`}>{email}</a>
            <p>Here will be button for downloading CV</p>
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