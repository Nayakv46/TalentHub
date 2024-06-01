import './formRemove.scss';
import { IoClose } from 'react-icons/io5';

const FormRemove = ({ id, handleRemoveExperience}) => {
  return (
    <button
        className='formRemove'
        onClick={() => {
            handleRemoveExperience(id);
        }}
    >
        <IoClose className='formRemove__icon' />
    </button>
  )
}

export default FormRemove