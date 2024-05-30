import './formRemove.scss';
import { IoClose } from 'react-icons/io5';

const FormRemove = ({ queryCount, setQueryCount, handleRemoveObject, id }) => {

  return (
    <button
        className='formRemove'
        onClick={() => {
            handleRemoveObject(id);
            queryCount > 1 && setQueryCount(queryCount - 1);
        }}
    >
        <IoClose className='formRemove__icon' />
    </button>
  )
}

export default FormRemove