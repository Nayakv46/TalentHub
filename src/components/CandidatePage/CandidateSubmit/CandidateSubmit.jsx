import './candidateSubmit.scss'
import { useCandidateContext } from "../../../context/CandidateContext"


const CandidateSubmit = () => {

    const { experienceId, handleFormSubmit } = useCandidateContext();

  return (
    <button
        className='form__submit'
        onClick={() => handleFormSubmit(experienceId)}
    >
        Submit Form
    </button>
  )
}

export default CandidateSubmit