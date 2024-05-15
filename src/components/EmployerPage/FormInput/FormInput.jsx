import './formInput.scss';
import { MdOutlineGrade } from 'react-icons/md';

const FormInput = ({queryData, id, handleInputChange}) => {
  return (
    <div className='formInput'>
        <span
            className='formInput__label'
        >
            <MdOutlineGrade
                className='formInput__label--icon'
            />

            Skill level
        </span>

        <div className={`formInput__choice formInput__choice--${queryData[id]?.input}`}>
            <div className='formInput__choice-progressBar'></div>
            <button
                className='formInput__choice-button'
                onClick={() => handleInputChange(id, 1)}
            ></button>
            <button
                className='formInput__choice-button'
                onClick={() => handleInputChange(id, 2)}
            ></button>
            <button
                className='formInput__choice-button'
                onClick={() => handleInputChange(id, 3)}
            ></button>
            <button
                className='formInput__choice-button'
                onClick={() => handleInputChange(id, 4)}
            ></button>
            <button
                className='formInput__choice-button'
                onClick={() => handleInputChange(id, 5)}
            ></button>
        </div>
        {/* <input
            type="number"
            name="inputValue"
            min="0"
            max="5"
            value={queryData[id]?.input || ""}
            onChange={(e) => handleInputChange(id, e.target.value)}
            id={`input-${id}`}
            className='formInput__input'
        /> */}
    </div>
  )
}

export default FormInput