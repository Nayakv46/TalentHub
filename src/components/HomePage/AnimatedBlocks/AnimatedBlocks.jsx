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
            <div className='animatedBlocks__box'>

            </div>
            <div className='animatedBlocks__box'>
                <img src={officeImg2} alt='office' className='animatedBlocks__img'/>
            </div>
            <div className='animatedBlocks__box'>

            </div>
            <div className='animatedBlocks__box'>
                <img src={officeImg6} alt='office' className='animatedBlocks__img'/>
            </div>
        </div>

        <div className='animatedBlocks__column'>
            <div className='animatedBlocks__box'>
                <img src={officeImg5} alt='office' className='animatedBlocks__img'/>
            </div>
            <div className='animatedBlocks__box'>
                <p>HELLO, MY NAME IS</p>
            </div>
            <div className='animatedBlocks__box'>
                <img src={officeImg3} alt='office' className='animatedBlocks__img'/>
            </div>
            <div className='animatedBlocks__box'>
                <p>MY NAME IS WHAT</p>
            </div>
            <div className='animatedBlocks__box'>
                <img src={officeImg4} alt='office' className='animatedBlocks__img'/>
            </div>
        </div>
    </div>
  )
}

export default AnimatedBlocks