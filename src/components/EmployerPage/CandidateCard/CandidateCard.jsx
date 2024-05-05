import './candidateCard.scss';

const CandidateCard = ({ key, email, experience }) => {

  return (
    <div className='candidate-card' key={key}>
        <p className='candidate-card__email'>
            {email}
        </p>

        <div className='candidate-card__exp-wrapper'>
            {Object.entries(experience).map((data, index) => {
                return (
                    <div className='candidate-card__experience' key={index}>
                        <p className='candidate-card__experience-title'>
                            {data[0].charAt(0).toUpperCase() + data[0].slice(1)}
                        </p>

                        <span className={`candidate-card__experience-level level-${data[1]}`}></span>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default CandidateCard