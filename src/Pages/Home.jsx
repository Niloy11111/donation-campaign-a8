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

    // const cards = useLoaderData() ; 
    // const [category, setCategory] = useState([])

    const [searchValue, setSearchValue] = useState('') ;

    // useEffect(() => {

        

       
        
       
    // }, [])

   



    const handleShowCategoryWise = () => {
        const inputField = document.getElementById('field-id')
        setSearchValue(inputField.value) ;

        setSearchValue(inputField.value) ;

        const categoryWiseCard = cards.filter(card => card.category_name.toLocaleLowerCase() === searchValue.toLocaleLowerCase() );

      if(categoryWiseCard){
        setCards(categoryWiseCard)
        console.log(categoryWiseCard)
      }

        console.log(searchValue)
        
        inputField.value = "" ;
    }
    
   

    return (
       <div>
        
        <Header 
        handleShowCategoryWise={handleShowCategoryWise}
        ></Header>

         <div className='mb-44 mt-24 grid lg:grid-cols-4 gap-6 mx-36'>
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