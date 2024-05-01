import './logout.scss';

import { signOut } from 'firebase/auth'
import { auth } from '../../config/firebase'
import { useNavigate } from 'react-router-dom';

const Logout = () => {

    const navigateTo = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigateTo('/');
        } catch(err) {
            console.error(err);
        }
    }

  return (
    <button
      className='logout-button'
      onClick={handleLogout}
    >
      Logout
    </button>
  )
}

export default Logout