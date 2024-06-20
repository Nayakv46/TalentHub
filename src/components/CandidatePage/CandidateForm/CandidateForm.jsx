import './candidateForm.scss';
import { useState, useEffect } from "react"
import { useCandidateContext } from "../../../context/CandidateContext"
import CandidateSubmit from '../CandidateSubmit/CandidateSubmit';
import FormAddButton from '../FormAddButton/FormAddButton';
import FormSelect from '../FormSelect/FormSelect';
import FormInput from '../FormInput/FormInput';
import FormRemove from '../FormRemove/FormRemove';
import FormRange from '../FormRange/FormRange';
import FormPosition from '../FormPosition/FormPosition';
import SelectSkill from '../SelectSkill/SelectSkill';

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
                <div key={`inputForm-${id}`} className='form__state-wrapper'>
                    <FormRemove
                        id={id}
                        handleRemoveExperience={handleRemoveExperience}
                    />

                    <FormSelect
                        formData={formData}
                        id={id}
                        handleSelectChange={handleSelectChange}
                    />

                    <SelectSkill
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

            <FormPosition
                position={position}
                setPosition={setPosition}
            />

            <FormRange
                yearsOfExperience={yearsOfExperience}
                handleYearsOfExperienceChange={handleYearsOfExperienceChange}
            />

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
    </div>
  )
}

export default CandidateForm