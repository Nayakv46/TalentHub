import './employerForm.scss';
import { set } from 'firebase/database';
import { useEmployerContext } from '../../../context/EmployerContext';
import EmployerSubmit from '../EmployerSubmit/EmployerSubmit';
import CandidateCard from '../CandidateCard/CandidateCard';
import { useState, useEffect } from 'react';

const EmployerForm = () => {

    const { queryData, setQueryData, handleSelectChange, handleInputChange, searchedData, handleFormSubmit } = useEmployerContext();

    const [queryCount, setQueryCount] = useState(1);
    const [showResults, setShowResults] = useState(false);

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

        {/* <EmployerSubmit /> */}

        <button
            className='form__submit'
            onClick={() => {
                handleFormSubmit()
                setTimeout(() => {
                    setShowResults(true)
                }, 1000)
            }}
        >
            Submit Form
        </button>

        After clicking submit you will see all results for now.

        Don't worry, the full functionality will be added in the near future. Due to certain circumstances, project's development had to be halted for a few days. Please check back later and thank you for your patience.

        <br />
        <br />

        Styling will also be applied in some time. Feel free to contact me for more information regarding this project.

        {Object.entries(queryData).map((data, index) => {
            return (
                <div key={index}>
                    {data[1].select} - {data[1].input}
                </div>
            )
        })}

        {/* {searchedData && searchedData.map((doc, index) => {
            console.log(doc.data())
            return (
                <div key={index}>
                    {doc.data().experience}
                </div>
            )
        })} */}
        {showResults && (<div className='searchedData__results'>
            {showResults && searchedData.map((doc, index) => {
                // console.log(doc.email)
                return <CandidateCard key={index} email={doc.email} experience={doc.experience}/>
            })}
        </div>)}
    </>
  )
}

export default EmployerForm