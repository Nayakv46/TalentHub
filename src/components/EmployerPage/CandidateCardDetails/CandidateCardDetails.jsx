import './candidateCardDetails.scss';
import { IoClose } from 'react-icons/io5';
import CandidateCardExperience from '../CandidateCardExperience/CandidateCardExperience';
import CandidateCardHeader from '../CandidateCardHeader/CandidateCardHeader';
import { FaClipboardCheck, FaRegEnvelope } from 'react-icons/fa';
import { FaClipboardUser } from 'react-icons/fa6';
import { LuFileBadge } from 'react-icons/lu';

const CandidateCardDetails = ({ hasTransitionedInDetails, showDetails, email, setShowDetails, experience, yearsOfExperience, position }) => {

  return (
    <>
        <div className={`candidateCardDetails ${hasTransitionedInDetails && 'in'} ${showDetails && 'visible'}`}>
            <IoClose className='candidateCardDetails__close' onClick={() => setShowDetails(false)} />

            <CandidateCardHeader position={position} yearsOfExperience={yearsOfExperience} />
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