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
    </div>
  )
}

export default FormInput