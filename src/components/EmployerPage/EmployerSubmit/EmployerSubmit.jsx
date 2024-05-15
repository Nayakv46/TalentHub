import './employerSubmit.scss'
import { useEmployerContext } from "../../../context/EmployerContext"

const EmployerSubmit = ({ setShowResults }) => {

    const { handleFormSubmit } = useEmployerContext();

  return (
    <button
        className='form__submit'
        onClick={() => {
          handleFormSubmit();
          setTimeout(() => {
            setShowResults(true);
          }, 1000);
          }
        }
    >
        Submit Form
    </button>
  )
}

export default EmployerSubmit