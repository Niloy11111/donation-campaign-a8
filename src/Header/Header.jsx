// import React, { useState } from 'react';


const Header = ({handleShowCategoryWise}) => {



    return (
        <div className='bg-[rgba(253,253,254,0.92)] bg-blend-overlay ' style={
            {
                backgroundImage : `url('https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR2GM7_-L1jAdPY9tr0PH1GHNI1yUJbyasF6QGeCBIzCn0tDLPpCbDPueYo')`,
                backgroundRepeat : 'no-repeat',
                backgroundSize : 'cover',           
            }
        }>

            
          <div className='flex justify-center h-[600px] items-center'>
          <div>
                <h2 className='text-5xl text-[#0B0B0B] font-bold text-center'>I Grow By Helping People In Need</h2>

                <div className='mt-10 flex mx-auto justify-between w-[480px] bg-[#FFF] border border-[#DEDEDE] rounded-lg'>

                 <input id='field-id' className='py-4 pl-4 outline-none' type="text" placeholder='Search here....' />

                 <button onClick={handleShowCategoryWise} className='bg-[#FF444A] py-4 px-6 rounded-r-lg text-base font-semibold text-[#FFF]'>Search</button>

                </div>
          </div>


            </div>
        </div>
    );
};

export default Header;