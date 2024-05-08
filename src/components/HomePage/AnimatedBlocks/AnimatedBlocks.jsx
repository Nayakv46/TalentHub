import './animatedBlocks.scss';
import officeImg1 from '../../../assets/HomeImages/Office1.jpg';
import officeImg2 from '../../../assets/HomeImages/Office2.jpg';
import officeImg3 from '../../../assets/HomeImages/Office3.jpg';
import officeImg4 from '../../../assets/HomeImages/Office4.jpg';
import officeImg5 from '../../../assets/HomeImages/Office5.jpg';
import officeImg6 from '../../../assets/HomeImages/Office6.jpg';

const AnimatedBlocks = () => {
  return (
    <div className='animatedBlocks'>
        <div className='animatedBlocks__column'>
            <div className='animatedBlocks__box'>
                <img src={officeImg1} alt='office' className='animatedBlocks__img'/>
            </div>
            <div className='animatedBlocks__box animatedBlocks__box--mojito'>
                <div className="box__content">
                    <p className='box__text'>1,000+</p>
                    <p className='box__text'>employed</p>
                </div>
            </div>
            <div className='animatedBlocks__box'>
                <img src={officeImg2} alt='office' className='animatedBlocks__img'/>
            </div>
            <div className='animatedBlocks__box animatedBlocks__box--peach'>
                <div className="box__content">
                    <p className='box__text'>7+</p>
                    <p className='box__text'>years of experience</p>
                </div>
            </div>
            <div className='animatedBlocks__box'>
                <img src={officeImg6} alt='office' className='animatedBlocks__img'/>
            </div>
        </div>

        <div className='animatedBlocks__column'>
            <div className='animatedBlocks__box'>
                <img src={officeImg5} alt='office' className='animatedBlocks__img'/>
            </div>
            <div className='animatedBlocks__box animatedBlocks__box--neon'>
                <div className="box__content">
                    <p className='box__text'>200+</p>
                    <p className='box__text'>employers</p>
                </div>
            </div>
            <div className='animatedBlocks__box'>
                <img src={officeImg3} alt='office' className='animatedBlocks__img'/>
            </div>
            <div className='animatedBlocks__box animatedBlocks__box--butterfly'>
                <div className="box__content">
                    <p className='box__text'>10,000+</p>
                    <p className='box__text'>registered</p>
                </div>
            </div>
            <div className='animatedBlocks__box'>
                <img src={officeImg4} alt='office' className='animatedBlocks__img'/>
            </div>
        </div>
    </div>
  )
}

export default AnimatedBlocks