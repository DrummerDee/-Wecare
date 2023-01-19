import React from 'react';
import {Link } from 'react-router-dom';
import Logo from '../Images/Logo.png';
import {FaSearch} from 'react-icons/fa';
import '../Styles/Navbar.css';

const Navbar = () => {
  return (
    <>
    <nav>
        <Link to='/'> 
            <img 
                src={Logo}
                width={100}
                height={80}
                alt = 'an outline of hands cusping a red heart'
                className='image'
                /> 
        </Link>
        <ul>
            <li><Link to='/login'> Sign In </Link></li>
            <li>
                <input type='text' placeholder='Search' className ='search_box'/> 
                <Link to='/search'>
                    <FaSearch
                        className='mag_glass'/>
                </Link>
            </li>
        </ul>
    </nav>
</>
  )
}

export default Navbar;
