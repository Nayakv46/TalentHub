import './logout.scss';

import { signOut } from 'firebase/auth'
import { auth } from '../../config/firebase'

const Logout = () => {
    const handleLogout = async () => {
        try {
            await signOut(auth);
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