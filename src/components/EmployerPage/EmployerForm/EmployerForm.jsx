import './employerForm.scss';
import { useEmployerContext } from '../../../context/EmployerContext';
import EmployerSubmit from '../EmployerSubmit/EmployerSubmit';
import CandidateCard from '../CandidateCard/CandidateCard';
import { useState, useEffect } from 'react';
import FormSelect from '../FormSelect/FormSelect';
import FormAddButton from '../FormAddButton/FormAddButton';
import FormInput from '../FormInput/FormInput';
import FormRemove from '../FormRemove/FormRemove';
import FormRange from '../FormRange/FormRange';
import { PiStackBold } from 'react-icons/pi';
import { FaChevronDown } from 'react-icons/fa6';

const EmployerForm = () => {

    const { queryData, handleSelectChange, handleInputChange, searchedData, handleFormSubmit, handleRemoveObject, yearsOfExperience, setYearsOfExperience } = useEmployerContext();

    const [queryCount, setQueryCount] = useState(1);
    const [showResults, setShowResults] = useState(false);

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

    const skillList = [
        "React",
        "Vue",
        "Angular",
        "Svelte",
        "Ember",
        "PHP",
        "Python",
        "Ruby",
        "Java",
        "C++",
        "C#",
        "C",
        "Swift",
        "Kotlin",
        "Javascript",
        "Typescript",
        "HTML",
        "CSS",
        "SASS",
        "LESS",
        "SQL"
    ]

    const generateInputs = () => {
        const inputs = [];
        for (let id = 0; id < queryCount; id++) {
            inputs.push(
                <div key={id} className='form__state-wrapper'>
                    <FormRemove
                        queryCount={queryCount}
                        setQueryCount={setQueryCount}
                        handleRemoveObject={handleRemoveObject}
                        id={id}
                    />

                    <FormSelect
                        id={id}
                        handleSelectChange={handleSelectChange}
                        queryData={queryData}
                    />

                    <div className='selectSkill'>
                        <label
                            htmlFor={`select-skill-${id}`}
                            className='selectSkill__label'
                        >
                            <PiStackBold
                                className='selectSkill__label--icon'
                            />
                            Select a skill
                        </label>

                        <div className='selectSkill__inner'>
                            <div
                                className={`selectSkill__chosen ${showOptions && `open`}`}
                                onClick={handleShowOptions}
                            >
                                {queryData[id]?.select || "Select"}
                            </div>

                            <div className='selectSkill__icon'>
                                <FaChevronDown
                                    className={`selectSkill__icon-svg ${showOptions && `open`}`}
                                    onClick={handleShowOptions}
                                />
                            </div>

                            <div
                                className={`selectSkill__options ${showOptions && `open`}`}
                                id={`select-skill-${id}`}
                            >
                                {skillList.map((skill, index) => {
                                    return (
                                        <button
                                            key={`selectSkill-${id}-button-${index}`}
                                            className='selectSkill__options-button'
                                            value={skill}
                                            onClick={(e) => {
                                                handleSelectChange(id, e.target.value);
                                            }}
                                        >
                                            {skill}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <FormInput
                        id={id}
                        queryData={queryData}
                        handleInputChange={handleInputChange}
                    />

                </div>
            );
        }
        return inputs;
    }

  return (
    <div className='employer__form'>
        <FormRange
            yearsOfExperience={yearsOfExperience}
            setYearsOfExperience={setYearsOfExperience}
        />

        <div className='employer__form-requirements'>
            {generateInputs()}
        </div>

        <div className='employer__form-buttons'>
            <FormAddButton handleInputAdd={() => setQueryCount(queryCount + 1)} />

            <EmployerSubmit handleFormSubmit={handleFormSubmit} setShowResults={setShowResults} />
        </div>

        {showResults && (<div className='searchedData__results'>
            {showResults && searchedData.map((doc, index) => {
                return <CandidateCard key={`candidate-card__${index}`} email={doc.email} experience={doc.experience} yearsOfExperience={doc.yearsOfExperience} position={doc.position} />
            })}
        </div>)}
    </div>
  )
}

export default EmployerForm