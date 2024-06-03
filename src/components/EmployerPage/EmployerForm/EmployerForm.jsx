import './employerForm.scss';
import { useEmployerContext } from '../../../context/EmployerContext';
import EmployerSubmit from '../EmployerSubmit/EmployerSubmit';
import CandidateCard from '../CandidateCard/CandidateCard';
import { useState } from 'react';
import FormSelect from '../FormSelect/FormSelect';
import FormAddButton from '../FormAddButton/FormAddButton';
import FormInput from '../FormInput/FormInput';
import FormRemove from '../FormRemove/FormRemove';
import FormRange from '../FormRange/FormRange';

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

                    <FormSelect
                        id={id}
                        handleSelectChange={handleSelectChange}
                        queryData={queryData}
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


        {Object.entries(queryData).map((data, index) => {
            return (
                <div key={index}>
                    {data[1].select} - {data[1].input}
                </div>
            )
        })}

        {showResults && (<div className='searchedData__results'>
            {showResults && searchedData.map((doc, index) => {
                return <CandidateCard key={`candidate-card__${index}`} email={doc.email} experience={doc.experience} yearsOfExperience={doc.yearsOfExperience} position={doc.position} />
            })}
        </div>)}
    </div>
  )
}

export default EmployerForm