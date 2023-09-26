import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import swal from 'sweetalert';


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
        <div className='mx-36'>
        
        <div className='h-[700px] w-[100%] mx-auto mt-20 mb-12 relative' style={{
            backgroundImage : `url(${cover_img})`,
            backgroundRepeat : 'no-repeat',
            backgroundSize : 'cover'
        }}>
          <div style={
            {
                backgroundColor : 'rgba(11, 11, 11, 0.50)'
            }
          } 
          className='h-[130px] w-[100%] bottom-0 absolute'>

          <button onClick={handleAddToDonation} style={
                {
                    backgroundColor : `${text_button_color}`
                }
            } className='text-[#FFF] text-xl font-semibold py-4 px-6 rounded mt-9 ml-9 mb-9 '>Donate $290</button>

            
          </div>
        </div>
        <h2 className='text-[#0B0B0B] text-4xl font-bold mt-14'>{title}</h2>
        <p className='text-[#0B0B0BB2] mt-6 mb-32'>{description}</p>
        </div>
    );
};

export default Donation;