import './formSelect.scss'
import { PiStackBold } from 'react-icons/pi'

const FormSelect = ({ queryData, id, handleSelectChange }) => {
  return (
    <div className='formSelect'>
      <label
        htmlFor={`select-${id}`}
        className='formSelect__label'
      >
        <PiStackBold
          className='formSelect__label--icon'
        />

        Select a skill
      </label>

      <select
          value={queryData[id]?.select || ""}
          onChange={(e) => handleSelectChange(id, e.target.value)}
          className='formSelect__select'
          id={`select-${id}`}
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
    </div>
  )
}

export default FormSelect