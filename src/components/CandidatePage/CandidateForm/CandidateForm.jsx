import './candidateForm.scss';
import { useState, useEffect } from "react"
import { useCandidateContext } from "../../../context/CandidateContext"
import CandidateSubmit from '../CandidateSubmit/CandidateSubmit';
import FormAddButton from '../FormAddButton/FormAddButton';
import FormSelect from '../FormSelect/FormSelect';
import { BiSolidBarChartAlt2 } from 'react-icons/bi'
import { BiBarChart } from 'react-icons/bi';
import { IoStatsChart } from 'react-icons/io5';
import { IoStatsChartOutline } from 'react-icons/io5';
import { HiOutlineChartBar } from 'react-icons/hi2';
import { BsBarChart } from 'react-icons/bs';
import { TbAntennaBars5 } from 'react-icons/tb';
import { MdOutlineGrade } from 'react-icons/md';

const CandidateForm = () => {

    const { formData, handleSelectChange, handleInputChange } = useCandidateContext();

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
                <div key={id} className='form__state-wrapper'>
                    <FormSelect
                        formData={formData}
                        id={id}
                        handleSelectChange={handleSelectChange}
                    />

                    <div className='formInput'>
                        <label
                            htmlFor={`input-${id}`}
                            className='formInput__label'
                        >
                            <MdOutlineGrade
                                className='formInput__label--icon'
                            />

                            Rate your skill
                        </label>

                        <input
                            type="number"
                            name="inputValue"
                            min="0"
                            max="5"
                            value={formData[id]?.input || ""}
                            onChange={(e) => handleInputChange(id, e.target.value)}
                            id={`input-${id}`}
                            className='formInput__input'
                        />
                    </div>
                </div>
            );
        }
        return inputs;
    }

  return (
    <div className='candidate_toDelete'>

    <div className='candidate__form'>

        <div className='candidate__form-wrapper'>
            {generateInputs()}
        </div>

        <FormAddButton handleInputAdd={handleInputAdd} />

        <CandidateSubmit />

    </div>


    <div className='candidate__form-entries'>
        {Object.entries(formData).map((data, index) => {
            return (
                <div key={index}>
                    {data[1].select} - {data[1].input}
                </div>
            )
        })}
    </div>
</div>
  )
}

export default CandidateForm