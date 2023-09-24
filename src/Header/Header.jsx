import React from 'react';
import NavBar from '../NavBar/NavBar';

const Header = () => {
    return (
        <div className='bg-[rgba(253,253,254,0.92)] bg-blend-overlay ' style={
            {
                backgroundImage : `url('https://img.freepik.com/free-vector/charity-flat-concept-with-smiling-volunteers-holding-donation-boxes-big-heart-vector-illustration_1284-79449.jpg?w=1380&t=st=1695590468~exp=1695591068~hmac=0363d7e3152a64d1f48f69223fc5d43e7099827c12daddef26532c403c939941')`,
                backgroundRepeat : 'no-repeat',
                backgroundSize : 'cover',
                
                
            }
        }>
            <NavBar></NavBar>
            
          <div className='flex justify-center h-[600px] items-center'>
          <div>
                <h2 className='text-5xl text-[#0B0B0B] font-bold text-center'>I Grow By Helping People In Need</h2>

                <div className='mt-10 flex mx-auto justify-between w-[480px] bg-[#FFF] border border-[#DEDEDE] rounded-lg'>

                 <input className='py-4 pl-4 outline-none' type="text" placeholder='Search here....' />

                 <button className='bg-[#FF444A] py-4 px-6 text-base font-semibold text-[#FFF]'>Search</button>

                </div>
          </div>


            </div>
        </div>
    );
};

export default Header;