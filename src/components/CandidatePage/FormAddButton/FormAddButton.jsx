import './formAddButton.scss';
const FormAddButton = ({ handleInputAdd }) => {
  return (
    <button
        className='form__add'
        onClick={handleInputAdd}
    >
        Add
    </button>
  )
}

export default FormAddButton