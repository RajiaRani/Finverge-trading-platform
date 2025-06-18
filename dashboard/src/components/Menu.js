import React, { useState } from 'react';
function Menu() {
    const [isMenuOpen, setIsMenuOpen] = useState(0);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    const hanldeMenuClick = (index) =>{
     setIsMenuOpen(index);
    }

    const handleProfileClick = () => {
        setIsProfileDropdownOpen(!isProfileDropdownOpen)
    }
    
    return (
        <>
        <div className='menu-container d-flex'>
            <img src='/logo.png' alt='logo' style={{width:"40px", height:"40px"}} />
            <div className='menus'>
                <ul className='d-flex' style={{listStyle:"none"}}>
                    <li>Dashboard </li>
                    <li> Orders</li>
                    <li>Holdings </li>
                    <li> Positions</li>
                    <li>Funds </li>
                    <li>Apps </li>
                </ul>

            </div>

        </div>
        </>
      );
}

export default Menu;