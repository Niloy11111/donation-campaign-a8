// import React, { useState } from 'react';

{/* <div id="slide1" class="carousel-item relative w-full h-[270px] md:h-[400px] lg:h-[660px] bg-no-repeat bg-cover flex justify-center items-center" style="background-image: url(./images/banner1.png);"> */}



const Header = ({handleShowCategoryWise}) => {



    return (
        <div className='bg-[rgba(253,253,254,0.92)] bg-blend-overlay md:h-[400px] h-[270px] lg:h-full'
         style={
            {
                backgroundImage : `url('https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR2GM7_-L1jAdPY9tr0PH1GHNI1yUJbyasF6QGeCBIzCn0tDLPpCbDPueYo')`,
                backgroundRepeat : 'no-repeat',
                backgroundSize : 'cover',           
            }
        }>

            
          <div className='flex justify-center h-full lg:h-[600px] items-center'>
          <div>
                <h2 className='text-3xl md:text-4xl lg:text-5xl text-[#0B0B0B] font-bold text-center'>I Grow By Helping People In Need</h2>

                <div className='mt-6 lg:mt-10 mx-auto flex justify-between bg-[#FFF] border w-[300px] md:w-[300px] lg:w-[470px] border-[#DEDEDE] rounded-lg'>

                 <input id='field-id' className='py-3 lg:py-4 pl-4 outline-none ' type="text" placeholder='Search here....' />

                 <button onClick={handleShowCategoryWise} className='bg-[#FF444A] py-3 lg:py-4 px-6 rounded-r-lg text-base font-semibold text-[#FFF]'>Search</button>

                </div>



          </div>


            </div>
        </div>
    );
};

export default Header;


{/* <div class="flex  bg-white-primary border border-[#11111126] rounded-lg">

<input id="coupon-field" type="text" placeholder="Coupon code" class="text-xl font-normal font-work outline-none ml-4 w-full lg:w-[180px]"/>
 <button id="btn-apply" disabled class="px-6 py-4 bg-btn-color rounded-r-lg text-2xl font-semibold font-work text-white-primary"> Apply </button>
</div> */}