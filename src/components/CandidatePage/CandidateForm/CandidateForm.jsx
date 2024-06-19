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
import { FaChevronDown } from 'react-icons/fa6';

const CandidateForm = () => {

    const { formData, handleSelectChange, handleInputChange, yearsOfExperience, handleYearsOfExperienceChange, position, setPosition, handleRemoveExperience, experienceId } = useCandidateContext();

    const [inputCount, setInputCount] = useState();

    const [selectSkill, setSelectSkill] = useState(null);
    const [showOptions, setShowOptions] = useState(false);

    useEffect(() => {
        const handleDocumentClick = () => {
          setShowOptions(false);
        };
    
        if (showOptions) {
          document.addEventListener('click', handleDocumentClick);
        }
    
        return () => {
          document.removeEventListener('click', handleDocumentClick);
        };
      }, [showOptions]);
    
      const handleShowOptions = (event) => {
        event.stopPropagation();
        setShowOptions(!showOptions);
      };

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
                    <FormRemove
                        id={id}
                        handleRemoveExperience={handleRemoveExperience}
                    />

                    <FormSelect
                        formData={formData}
                        id={id}
                        handleSelectChange={handleSelectChange}
                    />

                    <div className='selectSkill'>
                        <label
                            htmlFor={`select-skill-${id}`}
                            className='selectSkill__label'
                        >
                            Select a skill
                        </label>

                        <div className='selectSkill__inner'>
                            <div
                                className={`selectSkill__chosen ${showOptions && `open`}`}
                                onClick={handleShowOptions}
                            >
                                {selectSkill === null ? 'Select a skill' : selectSkill}
                            </div>
                            <div className='selectSkill__icon'>
                                <FaChevronDown
                                    className={`selectSkill__icon-svg ${showOptions && `open`}`}
                                />
                            </div>
                            <div className={`selectSkill__options ${showOptions && `open`}`}>
                                <button
                                    className='selectSkill__options-button'
                                    value="React"
                                    onClick={() => {
                                        setSelectSkill("React");
                                        // setShowOptions(false);
                                    }}
                                >React</button>
                                <button
                                    className='selectSkill__options-button'
                                    value="Vue"
                                    onClick={() => {
                                        setSelectSkill("Vue");
                                        // setShowOptions(false);
                                    }}
                                >Vue</button>
                                <button
                                    className='selectSkill__options-button'
                                    value="Angular"
                                    onClick={() => {
                                        setSelectSkill("Angular");
                                        // setShowOptions(false);
                                    }}
                                >Angular</button>
                                <button
                                    className='selectSkill__options-button'
                                    value="Svelte"
                                    onClick={() => {
                                        setSelectSkill("Svelte");
                                        // setShowOptions(false);
                                    }}
                                >Svelte</button>
                                <button
                                    className='selectSkill__options-button'
                                    value="Ember"
                                    onClick={() => {
                                        setSelectSkill("Ember");
                                        // setShowOptions(false);
                                    }}
                                >Ember</button>
                                <button
                                    className='selectSkill__options-button'
                                    value="PHP"
                                    onClick={() => {
                                        setSelectSkill("PHP");
                                        // setShowOptions(false);
                                    }}
                                >PHP</button>
                                <button
                                    className='selectSkill__options-button'
                                    value="Python"
                                    onClick={() => {
                                        setSelectSkill("Python");
                                        // setShowOptions(false);
                                    }}
                                >Python</button>
                            </div>
                        </div>
                    </div>

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