import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';

const Home = () => {
    
    const cards = useLoaderData() ;

    return (
        <div className='mb-44 mt-24 grid lg:grid-cols-4 gap-6 mx-32'>
        {
            cards.map(card => <Card key={card.id}
            card={card}
            ></Card>)
        }
        </div>
    );
};

export default Home;