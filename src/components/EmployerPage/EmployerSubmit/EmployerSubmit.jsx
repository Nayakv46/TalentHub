import './employerSubmit.scss'
import { useEmployerContext } from "../../../context/EmployerContext"

const EmployerSubmit = () => {

    const { handleFormSubmit } = useEmployerContext();

  return (
    <button
        className='form__submit'
        onClick={() => handleFormSubmit()}
    >
        Submit Form
    </button>
  )
}

export default EmployerSubmit