import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='flex justify-between items-center mx-36 pt-12'>

            <div>
                <img src='https://i.ibb.co/t2SVyK2/Logo.png'></img>
            </div>

            <div>
                <ul className='flex gap-12 text-[#0B0B0B] font-normal'>
                    <NavLink to="/"><li>Home</li></NavLink>
                    <li>Donation</li>
                    <li>Statistics</li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;<div>
<img src=''></img></div>