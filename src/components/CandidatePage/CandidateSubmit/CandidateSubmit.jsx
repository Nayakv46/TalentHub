import './candidateSubmit.scss'
import { useCandidateContext } from "../../../context/CandidateContext"


const CandidateSubmit = () => {

    const { experienceId, handleFormSubmit } = useCandidateContext();

  return (
    <button
        className='form__submit'
        onClick={() => handleFormSubmit(experienceId)}
    >
        Apply Changes
    </button>
  )
}

export default CandidateSubmit