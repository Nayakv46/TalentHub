import './employerForm.scss';
import { set } from 'firebase/database';
import { useEmployerContext } from '../../../context/EmployerContext';
import EmployerSubmit from '../EmployerSubmit/EmployerSubmit';
import CandidateCard from '../CandidateCard/CandidateCard';
import { useState, useEffect } from 'react';
import FormSelect from '../FormSelect/FormSelect';
import FormAddButton from '../FormAddButton/FormAddButton';
import FormInput from '../FormInput/FormInput';

const EmployerForm = () => {

    const { queryData, setQueryData, handleSelectChange, handleInputChange, searchedData, handleFormSubmit } = useEmployerContext();

    const [queryCount, setQueryCount] = useState(1);
    const [showResults, setShowResults] = useState(false);

    const generateInputs = () => {
        const inputs = [];
        for (let id = 0; id < queryCount; id++) {
            inputs.push(
                <div key={id} className='form__state-wrapper'>
                    <FormSelect
                        id={id}
                        handleSelectChange={handleSelectChange}
                        queryData={queryData}
                    />

                    <FormInput id={id} queryData={queryData} handleInputChange={handleInputChange} />

                </div>
            );
        }
        return inputs;
    }

  return (
    <div className='employer__form'>
        {generateInputs()}

        <FormAddButton handleInputAdd={() => setQueryCount(queryCount + 1)} />

        {/* <EmployerSubmit /> */}

        <button
            className='form__submit'
            onClick={() => {
                handleFormSubmit()
                setTimeout(() => {
                    setShowResults(true)
                }, 1000)
            }}
        >
            Submit Form
        </button>

        After clicking submit you will see all results for now.

        Don't worry, the full functionality will be added in the near future. Due to certain circumstances, project's development had to be halted for a few days. Please check back later and thank you for your patience.

        <br />
        <br />

        Styling will also be applied in some time. Feel free to contact me for more information regarding this project.

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
                // console.log(doc.email)
                return <CandidateCard key={`candidate-card__${index}`} email={doc.email} experience={doc.experience}/>
            })}
        </div>)}
    </div>
  )
}

export default EmployerForm