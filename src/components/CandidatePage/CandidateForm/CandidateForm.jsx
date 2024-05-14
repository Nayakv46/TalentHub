import './candidateForm.scss';
import { useState, useEffect } from "react"
import { useCandidateContext } from "../../../context/CandidateContext"
import CandidateSubmit from '../CandidateSubmit/CandidateSubmit';
import FormAddButton from '../FormAddButton/FormAddButton';

const CandidateForm = () => {

    const { formData, handleSelectChange, handleInputChange } = useCandidateContext();

    const [inputCount, setInputCount] = useState();

    useEffect(() => {
        if (Object.keys(formData).length > 0) {
            setInputCount(Object.keys(formData).length);
        } else {
            setInputCount(1);
        }
    }, [formData])

    const handleInputAdd = () => {
        setInputCount(inputCount + 1);
    }

    const generateInputs = () => {
        const inputs = [];
        for (let id = 0; id < inputCount; id++) {
            inputs.push(
                <div key={id} className='form__state-wrapper'>
                    <select value={formData[id]?.select || ""} onChange={(e) => handleSelectChange(id, e.target.value)}>
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

                    <input type="number" name="inputValue" min="0" max="5" value={formData[id]?.input || ""} onChange={(e) => handleInputChange(id, e.target.value)} />
                </div>
            );
        }
        return inputs;
    }

  return (
    <>

    <div className='candidate__form'>

        {generateInputs()}

        <FormAddButton handleInputAdd={handleInputAdd} />

        <CandidateSubmit />

    </div>


    {Object.entries(formData).map((data, index) => {
        return (
            <div key={index}>
                {data[1].select} - {data[1].input}
            </div>
        )
    })}
</>
  )
}

export default CandidateForm