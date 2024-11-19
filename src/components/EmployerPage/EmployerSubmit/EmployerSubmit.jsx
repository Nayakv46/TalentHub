import './employerSubmit.scss'
import { useEmployerContext } from "../../../context/EmployerContext"

const EmployerSubmit = ({ setShowResults }) => {

    const { handleFormSubmit } = useEmployerContext();

  return (
    <button
        className='form__submit'
        onClick={() => {
          handleFormSubmit();
            setShowResults(true);
          }
        }
    >
        Submit Form
    </button>
  )
}

export default EmployerSubmit