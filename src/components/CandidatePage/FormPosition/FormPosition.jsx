import './formPosition.scss';

const FormPosition = ({ position, setPosition }) => {
  return (
    <input
        type="text"
        placeholder="Software Engineer"
        className='positionInput'
        value={position}
        onChange={(e) => setPosition(e.target.value)}
    />
  )
}

export default FormPosition