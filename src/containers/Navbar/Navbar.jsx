import './navbar.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBarsStaggered } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import useMountTransition from '../../utils/useMountTransition';
import { useAuth } from '../../context/AuthContext';
import Logout from '../../components/Logout/Logout';


const Navbar = () => {

    const { currentUser, userLoggedIn, userType } = useAuth();

    const Menu = () => {
      return (
        <>
            <li>
                <Link to={userLoggedIn && userType == 'employer' ? "/employer" : "/auth/employer"} onClick={() => setToggleMenu(false)}>Employer</Link>
            </li>
            <li>
                <Link to={userLoggedIn && userType == 'candidate' ? "/candidate" : "/auth/candidate"} onClick={() => setToggleMenu(false)}>Candidate</Link>
            </li>
        </>
      )
    }

    const [toggleMenu, setToggleMenu] = useState(false);
    const hasTransitionedIn = useMountTransition(toggleMenu, 250);

  return (
    <>
        <nav className="navbar">
            <div className='navbar__content'>
                <Link to='/' className='navbar__logo gradient-color blue'>TalentHub</Link>


                <ul className='navbar__links'>
                    <Menu />
                    {/* <p>
                        {currentUser?.email}
                    </p> */}
                    {currentUser && <Logout />}
                </ul>

                <FaBarsStaggered
                    className='navbar__mobile-icon'
                    onClick={() => setToggleMenu(!toggleMenu)}
                />
            </div>
        </nav>

        <div className={`navbar-mobile ${toggleMenu ? `open-menu` : `closed-menu`}`}>
            <IoClose className='icon--close' onClick={() => setToggleMenu(false)} />

            <ul className='navbar-mobile__links'>
                <Menu/>
            </ul>

            {currentUser && <Logout />}
        </div>

        {(hasTransitionedIn || toggleMenu) && <div className={`menu-overlay ${hasTransitionedIn && 'in'} ${toggleMenu && 'visible'}`} onClick={() => setToggleMenu(false)}></div>}
        
    </>
  )
}

export default Navbar