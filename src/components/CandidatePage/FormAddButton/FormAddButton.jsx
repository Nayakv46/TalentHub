import './formAddButton.scss';
const FormAddButton = ({ handleInputAdd }) => {
  return (
    <button
        className='form__add'
        onClick={handleInputAdd}
    >
        Add Skill
    </button>
  )
}

export default FormAddButton