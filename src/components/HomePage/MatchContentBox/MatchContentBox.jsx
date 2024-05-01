import './matchContentBox.scss';
import { HiMiniArrowPathRoundedSquare } from 'react-icons/hi2';
import { SiTicktick } from 'react-icons/si';
import { MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md';
import { BiShieldPlus } from 'react-icons/bi';

const MatchContentBox = ({ icon, title, info}) => {

    const Icon = () => {
        switch (icon) {
            case 'path':
                return <BiShieldPlus className='icon--path' />
            case 'level':
                return <MdOutlineKeyboardDoubleArrowUp className='icon--doubleArrow'  />
            case 'tick':
                return <SiTicktick className='icon--tick' />
            default:
                return <BiShieldPlus className='icon--path' />
        }

    };

  return (
    <div className='matchContentBox'>
        <div className='matchContentBox__title'>
            {Icon()}
            {title}
        </div>

        <div className='matchContentBox__info'>
            {info}
        </div>
    </div>
  )
}

export default MatchContentBox