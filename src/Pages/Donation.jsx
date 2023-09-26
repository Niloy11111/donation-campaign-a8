import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import NavBar from '../NavBar/NavBar';


const Donation = () => {


    const allDonatedCards = useLoaderData() ; 

    const params = useParams() ;
   
    const idParse = parseFloat(params.id)

    // console.log(eachSingleDetails)
   
    const clickedCard = allDonatedCards.find(each => parseFloat(each.id) === idParse)

    const {cover_img, title, description, text_button_color, id} = clickedCard ;

    const idCard = parseFloat(id) ;

  
    const handleAddToDonation = () => {
        const donationAddedArray = [] ;

        const donatedCards = JSON.parse(localStorage.getItem('donations'))

        if(!donatedCards){
            donationAddedArray.push(clickedCard)
            localStorage.setItem('donations', JSON.stringify(donationAddedArray))
            swal("Good job!", "You have donated successfully!", "success");
        }

        else{
            const isExist = donatedCards.find(item => parseFloat(item.id) === idCard)

            if(!isExist){
                donationAddedArray.push(...donatedCards, clickedCard);
                localStorage.setItem('donations', JSON.stringify(donationAddedArray))
                swal("Good job!", "You have donated successfully!", "success");
            }
            else{
                swal("Sorry !", "You have already donated !", "error");
            }               
        }
    }




    return (
     <div>
        <NavBar></NavBar>
           <div className='mx-10 md:mx-24 lg:mx-36'>
        
        <div className='h-[370px] md:h-[580px] lg:h-[700px] w-[100%] mx-auto mt-20 mb-12 relative' style={{
            backgroundImage : `url(${cover_img})`,
            backgroundRepeat : 'no-repeat',
            backgroundSize : 'cover'
        }}>
          <div style={
            {
                backgroundColor : 'rgba(11, 11, 11, 0.50)'
            }
          } 
          className='h-[90px] md:h-[100px] lg:h-[130px] w-[100%] bottom-0 absolute'>

          <button onClick={handleAddToDonation} style={
                {
                    backgroundColor : `${text_button_color}`
                }
            } className='text-[#FFF] text-xl font-semibold py-3 lg:py-4 px-6 mt-4 md:mt-6 rounded lg:mt-9 ml-9 lg:mb-9 '>Donate $290</button>

            
          </div>
        </div>
        <h2 className='text-[#0B0B0B] text-2xl md:text-3xl lg:text-4xl font-bold lg:mt-14'>{title}</h2>
        <p className='text-[#0B0B0BB2] mt-6 mb-14 md:mb-24 lg:mb-32'>{description}</p>
        </div>
     </div>
    );
};

export default Donation;