import './employerForm.scss';
import { set } from 'firebase/database';
import { useEmployerContext } from '../../../context/EmployerContext';
import EmployerSubmit from '../EmployerSubmit/EmployerSubmit';
import CandidateCard from '../CandidateCard/CandidateCard';
import { useState, useEffect } from 'react';
import FormSelect from '../FormSelect/FormSelect';
import FormAddButton from '../FormAddButton/FormAddButton';
import FormInput from '../FormInput/FormInput';
import FormRemove from '../FormRemove/FormRemove';

const EmployerForm = () => {

    const { queryData, setQueryData, handleSelectChange, handleInputChange, searchedData, handleFormSubmit, handleRemoveObject, yearsOfExperience, setYearsOfExperience } = useEmployerContext();

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
        <div className='formRange'>
            <label
                htmlFor="yearsOfExperience"
                className='formRange-label'
            >
                Minimum years of Experience:&nbsp;
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
                onChange={(e) => setYearsOfExperience(e.target.value)}
            />
        </div>

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

        {/* {searchedData && searchedData.map((doc, index) => {
            console.log(doc.data())
            return (
                <div key={index}>
                    {doc.data().experience}
                </div>
            )
        })} */}

        {showResults && (<div className='searchedData__results'>
            {showResults && searchedData.map((doc, index) => {
                // console.log(doc)
                return <CandidateCard key={`candidate-card__${index}`} email={doc.email} experience={doc.experience} yearsOfExperience={doc.yearsOfExperience} position={doc.position} />
            })}
        </div>)}
    </div>
  )
}

export default EmployerForm