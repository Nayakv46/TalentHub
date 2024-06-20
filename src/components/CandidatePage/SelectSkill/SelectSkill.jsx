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
            <button
                className='selectSkill__options-button'
                value="React"
                onClick={(e) => {
                    handleSelectChange(id, e.target.value);
                }}
            >React</button>
            <button
                className='selectSkill__options-button'
                value="Vue"
                onClick={(e) => {
                    handleSelectChange(id, e.target.value);
                }}
            >Vue</button>
            <button
                className='selectSkill__options-button'
                value="Angular"
                onClick={(e) => {
                    handleSelectChange(id, e.target.value);
                }}
            >Angular</button>
            <button
                className='selectSkill__options-button'
                value="Svelte"
                onClick={(e) => {
                    handleSelectChange(id, e.target.values)
                }}
            >Svelte</button>
            <button
                className='selectSkill__options-button'
                value="Ember"
                onClick={(e) => {
                    handleSelectChange(id, e.target.value);
                }}
            >Ember</button>
            <button
                className='selectSkill__options-button'
                value="PHP"
                onClick={(e) => {
                    handleSelectChange(id, e.target.value);
                }}
            >PHP</button>
            <button
                className='selectSkill__options-button'
                value="Python"
                onClick={(e) => {
                    handleSelectChange(id, e.target.value);
                }}
            >Python</button>
        </div>
    </div>
</div>
  )
}

export default SelectSkill