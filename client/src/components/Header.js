import React from 'react'
import {Link} from 'react-router-dom'
import NavButton from './NavButton';

const Header = () => {
    return(
        <div className = "ui secondary pointing menu">
            <Link to = '/' className='item'>
                BookShelfr
            </Link>
            <div className = 'right menu'>
                <Link to = '/' className = "item">
                Splash
                </Link>
                <NavButton/>
            </div>
        </div>
    )
}
export default Header;