import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import ItemCard from './ItemCard';

const ItemCards = () => {
    

        const cardDetails = [
            {
                id: 1,
                name: "Openig Houres",
                discription: "Open At 8:00AM to 7:00PM",
                icon: clock,
                bgClass: "bg-gradient-to-r to-secondary from-primary"
            },
            {
                id: 2,
                name: "Visit our location",
                discription: "Brooklyn, NY 10036, United States",
                icon: marker,
                bgClass: "bg-accent"
            },
            {
                id: 1,
                name: "Contact us now",
                discription: "+000 123 456789",
                icon: phone,
                bgClass: "bg-gradient-to-r to-secondary from-primary"
            },
        ]
    
        
    
    return (
        <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                cardDetails.map(card => 
                <ItemCard
                    key={card.id}
                    card={card}
                >
                </ItemCard>)
            }
        </div>
    );
};

export default ItemCards;