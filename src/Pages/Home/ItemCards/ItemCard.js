import React from 'react';

const ItemCard = ({card}) => {
    const {name, discription, icon, bgClass } =card;
    return (
        <div className={`card card-side ${bgClass} shadow-xl p-6 mt-10 text-white`}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{discription}</p>
            </div>
        </div>
    );
};

export default ItemCard;