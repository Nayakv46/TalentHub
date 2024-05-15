import './candidateForm.scss';
import { useState, useEffect } from "react"
import { useCandidateContext } from "../../../context/CandidateContext"
import CandidateSubmit from '../CandidateSubmit/CandidateSubmit';
import FormAddButton from '../FormAddButton/FormAddButton';
import FormSelect from '../FormSelect/FormSelect';
import FormInput from '../FormInput/FormInput';

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
                    <FormSelect
                        formData={formData}
                        id={id}
                        handleSelectChange={handleSelectChange}
                    />

                    <FormInput
                        id={id}
                        formData={formData}
                        handleInputChange={handleInputChange}
                    />
                </div>
            );
        }
        return inputs;
    }

  return (
    <div className='candidate_toDelete'>

    <div className='candidate__form'>

        <div className='candidate__form-wrapper'>
            {generateInputs()}
        </div>

        <FormAddButton handleInputAdd={handleInputAdd} />

        <CandidateSubmit />

    </div>


    <div className='candidate__form-entries'>
        {Object.entries(formData).map((data, index) => {
            return (
                <div key={index}>
                    {data[1].select} - {data[1].input}
                </div>
            )
        })}
    </div>
</div>
  )
}

export default CandidateForm