import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const NavBar = () => {


    const navigate = useNavigate();


    const handleGoHome = () => {
         navigate("/");
    }


    return (
        <div className='flex justify-between items-center mx-36 pt-12'>

            <div>
                <img src='https://i.ibb.co/t2SVyK2/Logo.png'></img>
            </div>

            <div>
                <ul className='flex gap-12 text-[#0B0B0B] font-normal'>
                    <NavLink onClick={handleGoHome} to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
  }><li>Home</li></NavLink>

                    <NavLink to="/donatedCards"
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                  }
                    ><li>Donation</li></NavLink>
                    <li>Statistics</li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;<div>
<img src=''></img></div>