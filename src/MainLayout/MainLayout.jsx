import React from 'react';

import { Outlet } from 'react-router-dom';



const MainLayout = () => {
    return (
        <div className=''>
            
            {/* <NavBar></NavBar> */}
           
           <Outlet></Outlet>
        
        </div>
    );
};

export default MainLayout;