import './selectSkill.scss';
import { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa6';

const SelectSkill = ({ id }) => {

    const [showOptions, setShowOptions] = useState(false);
    const [selectSkill, setSelectSkill] = useState(null);

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
                onClick={handleShowOptions}
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
  )
}

export default SelectSkill