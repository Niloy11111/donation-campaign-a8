import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({card}) => {
    
    const {cover_img, category_name, category_bg, card_bg, text_button_color, donation_img, title, description, id,price } = card ;


    
    return (
       <NavLink to={`/donation/${id}`}>
 <div  className='rounded-lg' style={{
            backgroundColor : `${card_bg}`
        }} >

             <div>
                <img className='w-full' src={cover_img}></img>
             </div>

             <h4 className='ml-4 mt-4 rounded px-3 py-1 text-sm font-medium max-w-fit' style={{
            backgroundColor : `${category_bg}`,
            color : `${text_button_color}`
        }}>{category_name}</h4>

             <h3 className='pb-4 ml-4 text-xl font-semibold mt-2' style={{
             color : `${text_button_color}`
        }}>{title}</h3>

        </div>

       </NavLink>
    );
};

export default Card;