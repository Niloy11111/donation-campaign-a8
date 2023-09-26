import React, { useEffect, useState } from 'react';
import SingleDonationCard from '../SingleDonationCard/SingleDonationCard';

const DonatedCardsList = () => {

    const [donatedFields, setDonatedFields] = useState([]);

    const [showAllDonation, setShowAllDonation] = useState(4) ;
    
    const [hiddenShowAll, setHiddenShowAll] = useState(false);
    
    useEffect( () => {
        const donatedCards = JSON.parse(localStorage.getItem('donations'))
        
        if(donatedCards){
            setDonatedFields(donatedCards)
        }

    }, [])


    const handleShowAllDonation = () => {
        setShowAllDonation(12);
        setHiddenShowAll(true);
        
    }

    return (
       <div className='mb-20 md:mb-32 lg:mb-40'>

<div className='mt-20 mx-14 md:mx-20 lg:mx-36 grid md:grid-cols-1 lg:grid-cols-2 gap-6'>
        
        {
            donatedFields.slice(0,showAllDonation).map(donatedField => 

            <SingleDonationCard key={donatedField.id}
            donatedField={donatedField}
            ></SingleDonationCard>)
        }
        </div>


      {
        donatedFields.length > 4  && hiddenShowAll === false ?  <div className='text-center mt-10'>
        <button onClick={handleShowAllDonation} className='text-base rounded-lg text-[#FFF] font-semibold px-7 py-4 bg-[#009444]'>See All</button>
        </div> : ''
      }



       </div>
    );
};

export default DonatedCardsList;