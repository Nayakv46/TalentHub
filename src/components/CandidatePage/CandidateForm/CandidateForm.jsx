import './candidateForm.scss';
import { useState, useEffect } from "react"
import { useCandidateContext } from "../../../context/CandidateContext"
import CandidateSubmit from '../CandidateSubmit/CandidateSubmit';
import FormAddButton from '../FormAddButton/FormAddButton';
import FormSelect from '../FormSelect/FormSelect';
import FormInput from '../FormInput/FormInput';

const CandidateForm = () => {

    const { formData, handleSelectChange, handleInputChange, yearsOfExperience, handleYearsOfExperienceChange, position, setPosition, handleRemoveExperience, experienceId } = useCandidateContext();

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
                    <button onClick={() => handleRemoveExperience(id)}>Remove</button>
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
        <div className='candidate__position'>
            <p className='candidate__position-text'>Start by providing us with your present or desired position and how many years of experience you&apos;ve got.</p>

            <input
                type="text"
                placeholder="Software Engineer"
                className='candidate__position-input'
                value={position}
                onChange={(e) => setPosition(e.target.value)}
            />

            <div className='formRange'>
                <label
                    htmlFor="yearsOfExperience"
                    className='formRange-label'
                >
                    Years of Experience:&nbsp;
                        <p>
                            {yearsOfExperience == 0 || yearsOfExperience == undefined ? `0 - 1 year of experience` : `${yearsOfExperience}+ years of experience`}
                        </p>
                </label>

                <input
                    className='formRange-choice'
                    id='yearsOfExperience'
                    type="range"
                    min="0"
                    max="10"
                    step="1"
                    value={yearsOfExperience}
                    onChange={(e) => handleYearsOfExperienceChange(e.target.value)}
                />
            </div>
        </div>

        <div className='candidate__form'>

            <div className='candidate__form-wrapper'>
                {generateInputs()}
            </div>

            <div className='candidate__form-buttons'>
                <FormAddButton handleInputAdd={handleInputAdd} />

                <CandidateSubmit />
            </div>

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