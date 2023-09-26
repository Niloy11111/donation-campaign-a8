// import React, { useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';
import Header from '../Header/Header';
import { useEffect, useState } from 'react';

const Home = () => {

    const [cards, setCards ] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCards(data))

    }, [])

    const [searchValue, setSearchValue] = useState() ;

    const handleOnSubmit = e => {
        e.preventDefault() ;

        const categoryWiseCard = cards.filter(card => card.category_name.toLowerCase().includes(searchValue.toLowerCase())   );
    
       if(searchValue){
        setCards(categoryWiseCard)
       
        console.log(categoryWiseCard)
       }
       else{
        setCards(cards)

       }
       
      }
    
    const handleSearchValue = e => {
      setSearchValue(e.target.value);

    }
    
    
   

    return (
       <div>
        
        <Header 
        handleOnSubmit={handleOnSubmit}
        handleSearchValue={handleSearchValue}
        ></Header>

         <div className='mb-16 md:mb-32 lg:mb-44 mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-10 md:mx-24 lg:mx-36'>
        {
            cards.map(card => <Card key={card.id}
            card={card}
            ></Card>)
        }
        </div>
       </div>
    );
};

export default Home;