import './animatedBlocksBox.scss';

const AnimatedBlocksBox = ({ text1, text2, gradient, img }) => {
  return (
    <div className={`animatedBlocks__box ${gradient && `animatedBlocks__box--${gradient}`}`}>
        {text1 && (
            <div className="box__content">
                <p className='box__text'>{text1}</p>
                {text2 && (
                    <p className='box__text'>{text2}</p>
                )}
            </div>
        )}

        {img && (
            <img
                src={img}
                alt='office'
                className='animatedBlocks__img'
            />
        )}
    </div>
  )
}

export default AnimatedBlocksBox