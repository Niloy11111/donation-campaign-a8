import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleDonationCard = ({ donatedField }) => {

    const { donation_img, category_name, title, price, id, text_button_color,card_bg, category_bg } = donatedField;


    const navigate = useNavigate();


    const handleGoBack = () => {
      navigate(`/donation/${id}`);
    }

    return (
        <div>

            <div className='flex'>
                <div className='w-1/3'>
                    <img className='w-full h-full' src={donation_img}></img>
                </div>

                <div style={
                    {
                        backgroundColor : `${card_bg}`
                    }
                } className='w-2/3 pl-6 pb-6 rounded-r-lg'>
                    <h4 className='mt-6 rounded px-3 py-1 text-sm font-medium max-w-fit' style={{
                        backgroundColor: `${category_bg}`,
                        color: `${text_button_color}`
                    }}>{category_name}</h4>

                    <h3 className='mt-2 mb-2 text-2xl font-semibold text-[#0B0B0B]'>{title}</h3>

                    <h4 className='text-base font-semibold' style={{
                        color : `${text_button_color}`
                    }}>{price}</h4>

                    <button 
                    onClick={handleGoBack}
                    style={
                        {
                            backgroundColor: `${text_button_color}`
                        }
                    } className='text-[#FFF] text-xl font-semibold mt-5 py-3 px-4 rounded '>View Details</button>
                </div>
            </div>

           


        </div>
    );
};

export default SingleDonationCard;