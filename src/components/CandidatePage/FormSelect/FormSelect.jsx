import './formSelect.scss'

const FormSelect = ({ formData, id, handleSelectChange }) => {
  return (
    <select
        value={formData[id]?.select || ""}
        onChange={(e) => handleSelectChange(id, e.target.value)}
        className='form__select'
    >
        <option value="">Select</option>
        <option value="React">React</option>
        <option value="Vue">Vue</option>
        <option value="Angular">Angular</option>
        <option value="Svelte">Svelte</option>
        <option value="Ember">Ember</option>
        <option value="PHP">PHP</option>
        <option value="Python">Python</option>
        <option value="Ruby">Ruby</option>
        <option value="Java">Java</option>
        <option value="C++">C++</option>
        <option value="C#">C#</option>
        <option value="C">C</option>
        <option value="Swift">Swift</option>
        <option value="Kotlin">Kotlin</option>
        <option value="Javascript">Javascript</option>
        <option value="Typescript">Typescript</option>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="SASS">SASS</option>
        <option value="LESS">LESS</option>
        <option value="SQL">SQL</option>
    </select>
  )
}

export default FormSelect