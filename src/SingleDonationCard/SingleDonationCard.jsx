import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleDonationCard = ({ donatedField }) => {

    const { donation_img, category_name, title, price, id, text_button_color, card_bg, category_bg } = donatedField;


    const navigate = useNavigate();


    const handleGoBack = () => {
        navigate(`/donation/${id}`);
    }

    return (
        <div>

            <div className='md:flex'>
                <div className='md:w-1/3 flex-1 md:flex-none lg:flex-none'>
                    <img className='rounded-t-lg md:rounded-l-lg w-full h-full' src={donation_img}></img>
                </div>

                <div style={
                    {
                        backgroundColor: `${card_bg}`
                    }
                } className='md:w-2/3 pt-4 md:pt-0 md:flex-none lg:flex-none flex-1 pl-4 md:pl-6 lg:pl-6 pb-4 lg:pb-6 rounded-b-lg md:rounded-r-lg'>
                    <h4 className='mt-0 md:mt-6 rounded px-3 py-1 text-sm font-medium max-w-fit' style={{
                        backgroundColor: `${category_bg}`,
                        color: `${text_button_color}`
                    }}>{category_name}</h4>

                    <h3 className='mt-1 md:mt-2 mb-1 lg:mb-2 text-xl md:text-2xl font-semibold text-[#0B0B0B]'>{title}</h3>

                    <h4 className='text-base font-semibold' style={{
                        color: `${text_button_color}`
                    }}>{price}</h4>

                    <button
                        onClick={handleGoBack}
                        style={
                            {
                                backgroundColor: `${text_button_color}`
                            }
                        } className='text-[#FFF] md:text-xl lg:text-xl font-semibold mt-3 lg:mt-5 py-2  md:py-3 md:px-4 px-3 lg:px-4 rounded'>View Details</button>
                </div>
            </div>




        </div>
    );
};

export default SingleDonationCard;