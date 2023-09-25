import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';
import Header from '../Header/Header';

const Home = () => {
    
    const cards = useLoaderData() ;

    return (
       <div>
        
        <Header></Header>

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