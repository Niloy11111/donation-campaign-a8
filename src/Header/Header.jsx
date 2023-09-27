import { useState } from "react";
import NavBar from "../NavBar/NavBar";


const Header = ({ handleOnSubmit, handleSearchValue }) => {



  return (
    <div className='bg-[rgba(253,253,254,0.92)] bg-blend-overlay md:h-full lg:h-full'
      style={
        {
          backgroundImage: `url('https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR2GM7_-L1jAdPY9tr0PH1GHNI1yUJbyasF6QGeCBIzCn0tDLPpCbDPueYo')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',

        }
      }>
      <NavBar></NavBar>

      <div className='flex mx-10 justify-center h-[300px] md:h-[300px] lg:h-[600px] items-center'>
        <div>
          <h2 className='text-3xl md:text-4xl lg:text-5xl text-[#0B0B0B] font-bold text-center'>I Grow By Helping People In Need</h2>

          <div className='mt-6 lg:mt-10 md:mx-auto flex justify-between bg-[#FFF] border w-[300px] md:w-[300px] lg:w-[470px] border-[#DEDEDE] rounded-lg'>
            <input onChange={handleSearchValue} name='category' id='field-id' className='py-3 lg:py-4 pl-4 outline-none ' type="text" placeholder='Search here....' />

            <form onSubmit={handleOnSubmit} >
              <button type="submit" className='bg-[#FF444A] py-3 lg:py-4 px-6 rounded-r-lg text-base font-semibold text-[#FFF]'>Search</button>
            </form>

          </div>



        </div>


      </div>
    </div>
  );
};

export default Header;
