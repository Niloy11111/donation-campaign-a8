import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {



    return (
        <div className='flex flex-col lg:flex-row md:flex-col justify-between items-center mx-36 pt-8 lg:pt-12'>

            <div>
                <img src='https://i.ibb.co/t2SVyK2/Logo.png'></img>
            </div>

            <div className='mt-6 lg:mt-0'>
                <ul className='flex gap-12 text-[#0B0B0B] font-normal'>
                    <NavLink to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
  }><li>Home</li></NavLink>

                    <NavLink to="/donatedCards"
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                  }
                    ><li>Donation</li></NavLink>


               <NavLink to="/statistics"
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
              }
               >  <li>Statistics</li></NavLink>


                </ul>
            </div>
        </div>
    );
};

export default NavBar;<div>
<img src=''></img></div>