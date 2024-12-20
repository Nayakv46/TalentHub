import './employerForm.scss';
import { useEmployerContext } from '../../../context/EmployerContext';
import EmployerSubmit from '../EmployerSubmit/EmployerSubmit';
import CandidateCard from '../CandidateCard/CandidateCard';
import { useState } from 'react';
import FormAddButton from '../FormAddButton/FormAddButton';
import FormInput from '../FormInput/FormInput';
import FormRemove from '../FormRemove/FormRemove';
import FormRange from '../FormRange/FormRange';
import SelectSkill from '../SelectSkill/SelectSkill';

const EmployerForm = () => {

    const { queryData, handleSelectChange, handleInputChange, searchedData, handleFormSubmit, handleRemoveObject, yearsOfExperience, setYearsOfExperience } = useEmployerContext();

    const [queryCount, setQueryCount] = useState(1);
    const [showResults, setShowResults] = useState(false);

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

                    <SelectSkill
                        id={id}
                        queryData={queryData}
                        handleSelectChange={handleSelectChange}
                    />

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
            {searchedData.length > 0 && searchedData.map((doc, index) => {
                return <CandidateCard key={`candidate-card__${index}`} email={doc.email} experience={doc.experience} yearsOfExperience={doc.yearsOfExperience} position={doc.position} />
            })}
        </div>)}
    </div>
  )
}

export default EmployerForm