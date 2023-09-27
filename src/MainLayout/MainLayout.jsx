import React from 'react';

import { Outlet } from 'react-router-dom';



const MainLayout = () => {
    return (
        <div className=''>
            
           
           <Outlet></Outlet>
        
        </div>
    );
};

export default MainLayout;