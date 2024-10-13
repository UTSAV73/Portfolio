import React, { useState } from 'react';
import Navitem from './Navitem';

const Navbar = () => {
    const [navItemActive, setNavItemActive] = useState('');

    const activeItem = (itemId) => {
        if (navItemActive) {
            document.getElementById(navItemActive).classList.remove('active');
        }
        setNavItemActive(itemId);
        document.getElementById(itemId).classList.add('active');
    };

    return (
        <nav>
            <ul>
                <Navitem item="Home" tolink="/" activec={activeItem} />
                <Navitem item="About" tolink="/about" activec={activeItem} />
                <Navitem item="Education" tolink="/education" activec={activeItem} />
                <Navitem item="Skills" tolink="/skills" activec={activeItem} />
                <a href="https://drive.google.com/file/d/1du7vtBTzFowaWo4mgRzfe9_3PnBM8P7y/view?usp=sharing" target="_blank">Resume</a>
                <Navitem item="Contact" tolink="/contact" activec={activeItem} />
            </ul>
        </nav>
    );
};

export default Navbar;
