import './selectSkill.scss';
import { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa6';
import { PiStackBold } from 'react-icons/pi'

const SelectSkill = ({ id, formData, handleSelectChange }) => {

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

  return (
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
                {formData[id]?.select || "Select"}
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
  )
}

export default SelectSkill