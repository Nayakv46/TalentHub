import { useEmployerContext } from '../../../context/EmployerContext';
import './employerForm.scss';
import { useState } from 'react';

const EmployerForm = () => {

    const { queryData, setQueryData, handleSelectChange, handleInputChange } = useEmployerContext();

    const [queryCount, setQueryCount] = useState(1);

    const generateInputs = () => {
        const inputs = [];
        for (let id = 0; id < queryCount; id++) {
            inputs.push(
                <div key={id} className='form__state-wrapper'>
                    <select value={queryData[id]?.select || ""} onChange={(e) => handleSelectChange(id, e.target.value)}>
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

                    <input type="number" name="inputValue" min="0" max="5" value={queryData[id]?.input || ""} onChange={(e) => handleInputChange(id, e.target.value)} />
                </div>
            );
        }
        return inputs;
    }

  return (
    <>
        {generateInputs()}

        <button
            className='form__add'
            onClick={() => setQueryCount(queryCount + 1)}
        >
            Add
        </button>

        {Object.entries(queryData).map((data, index) => {
            return (
                <div key={index}>
                    {data[1].select} - {data[1].input}
                </div>
            )
        })}
    </>
  )
}

export default EmployerForm