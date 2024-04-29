import './navbar.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBarsStaggered } from 'react-icons/fa6';

const Menu = () => {
  return (
    <>
        <li>
            <Link to='/employer'>Employer</Link>
        </li>
        <li>
            <Link to='/candidate'>Candidate</Link>
        </li>
    </>
  )
}

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
        <nav className="navbar">
            <div className='navbar__content'>
                <Link to='/'>TalentHub</Link>

                <ul className='navbar__links'>
                    <Menu />
                </ul>

                <FaBarsStaggered
                    className='navbar__mobileIcon'
                    onClick={() => setToggleMenu(!toggleMenu)}
                />
            </div>
        </nav>

        <div className={`navbar-mobile ${toggleMenu ? `open-menu` : `closed-menu`}`}>
            <ul className='navbar-mobile__links'>
                <Menu/>
            </ul>
        </div>

        {toggleMenu && <div className="menu-overlay" onClick={() => setToggleMenu(false)}></div>}
        
    </>
  )
}

export default Navbar