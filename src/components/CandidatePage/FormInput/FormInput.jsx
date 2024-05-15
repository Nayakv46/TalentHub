import './formInput.scss';
import { MdOutlineGrade } from 'react-icons/md'

const FormInput = ({id, formData, handleInputChange}) => {
  return (
    <div className='formInput'>
        <label
            htmlFor={`input-${id}`}
            className='formInput__label'
        >
            <MdOutlineGrade
                className='formInput__label--icon'
            />

            Rate your skill
        </label>

        <input
            type="number"
            name="inputValue"
            min="0"
            max="5"
            value={formData[id]?.input || ""}
            onChange={(e) => handleInputChange(id, e.target.value)}
            id={`input-${id}`}
            className='formInput__input'
        />
    </div>
  )
}

export default FormInput