import './formRange.scss';

const FormRange = ({ yearsOfExperience, handleYearsOfExperienceChange }) => {
  return (
    <div className='formRange'>
        <label
            htmlFor="yearsOfExperience"
            className='formRange-label'
        >
            Years of Experience:&nbsp;
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
            onChange={(e) => handleYearsOfExperienceChange(e.target.value)}
        />
    </div>
  )
}

export default FormRange