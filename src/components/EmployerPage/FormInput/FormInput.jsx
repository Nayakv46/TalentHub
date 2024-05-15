import './formInput.scss';
import { MdOutlineGrade } from 'react-icons/md';

const FormInput = ({queryData, id, handleInputChange}) => {
  return (
    <div className='formInput'>
        <label
            htmlFor={`input-${id}`}
            className='formInput__label'
        >
            <MdOutlineGrade
                className='formInput__label--icon'
            />

            Skill level
        </label>

        <input
            type="number"
            name="inputValue"
            min="0"
            max="5"
            value={queryData[id]?.input || ""}
            onChange={(e) => handleInputChange(id, e.target.value)}
            id={`input-${id}`}
            className='formInput__input'
        />
    </div>
  )
}

export default FormInput