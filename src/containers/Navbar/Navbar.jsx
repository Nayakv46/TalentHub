import './navbar.scss';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaBarsStaggered } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import useMountTransition from '../../utils/useMountTransition';
import { useAuth } from '../../context/AuthContext';


const Navbar = () => {

    const { currentUser } = useAuth();

    const Menu = () => {
      return (
        <>
            <li>
                <Link to='/employer' onClick={() => setToggleMenu(false)}>Employer</Link>
            </li>
            <li>
                <Link to='/candidate' onClick={() => setToggleMenu(false)}>Candidate</Link>
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
                    {currentUser ? currentUser.email : 'No user'}
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
        </div>

        {(hasTransitionedIn || toggleMenu) && <div className={`menu-overlay ${hasTransitionedIn && 'in'} ${toggleMenu && 'visible'}`} onClick={() => setToggleMenu(false)}></div>}
        
    </>
  )
}

export default Navbar