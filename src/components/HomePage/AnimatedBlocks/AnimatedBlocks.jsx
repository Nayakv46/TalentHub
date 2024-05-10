import './animatedBlocks.scss';
import officeImg1 from '../../../assets/HomeImages/Office1.jpg';
import officeImg2 from '../../../assets/HomeImages/Office2.jpg';
import officeImg3 from '../../../assets/HomeImages/Office3.jpg';
import officeImg4 from '../../../assets/HomeImages/Office4.jpg';
import officeImg5 from '../../../assets/HomeImages/Office5.jpg';
import officeImg6 from '../../../assets/HomeImages/Office6.jpg';
import AnimatedBlocksBox from '../AnimatedBlocksBox/AnimatedBlocksBox';

const AnimatedBlocks = () => {
  return (
    <div className='animatedBlocks'>
        <div className='animatedBlocks__column'>
            <AnimatedBlocksBox
                img={officeImg1}
            />

            <AnimatedBlocksBox
                text1="1,000+"
                text2="employed"
                gradient="mojito"
            />

            <AnimatedBlocksBox
                img={officeImg2}
            />

            <AnimatedBlocksBox
                text1="7+"
                text2="years of experience"
                gradient="peach"
            />

            <AnimatedBlocksBox
                img={officeImg6}
            />
        </div>

        <div className='animatedBlocks__column'>
            <AnimatedBlocksBox
                img={officeImg5}
            />

            <AnimatedBlocksBox
                text1="200+"
                text2="employers"
                gradient="neon"
            />

            <AnimatedBlocksBox
                img={officeImg3}
            />

            <AnimatedBlocksBox
                text1="10,000+"
                text2="registered"
                gradient="butterfly"
            />

            <AnimatedBlocksBox
                img={officeImg4}
            />
        </div>
    </div>
  )
}

export default AnimatedBlocks