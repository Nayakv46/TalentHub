import './candidateCardExperience.scss';

const CandidateCardExperience = ({ data, index }) => {

    // filter out the top 3 experiences
    // const topExperiences = Object.entries(experience).sort((a, b) => b[1] - a[1]).slice(0, 3);

    // length of extra experiences in object
    // const experienceLength = Object.keys(experience).length - 3;
    
    const handleSkillLevel = (level) => {
        switch (level) {
            case 1:
                return 'Intern';
            case 2:
                return 'Junior';
            case 3:
                return 'Mid';
            case 4:
                return 'Senior';
            case 5:
                return 'Expert';
            default:
                return 'None';
        }
    }

  return (
    <div className='candidateCardExperience' key={index}>
        <p className='candidateCardExperience__title'>
            {data[0].charAt(0).toUpperCase() + data[0].slice(1)} {` - ${handleSkillLevel(data[1])}`}
        </p>

        <div className={`candidateCardExperience__level-wrapper candidateCardExperience__level-wrapper--${data[1]}`}>
            <div className='candidateCardExperience__level-progressBar'></div>
            <span className='candidateCardExperience__level-bar'></span>
            <span className='candidateCardExperience__level-bar'></span>
            <span className='candidateCardExperience__level-bar'></span>
            <span className='candidateCardExperience__level-bar'></span>
            <span className='candidateCardExperience__level-bar'></span>
        </div>
    </div>
  )
}

export default CandidateCardExperience