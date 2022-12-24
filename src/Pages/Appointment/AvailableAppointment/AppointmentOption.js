import React from 'react';


const AppointmentOption = ({data, setTreatment}) => {
    const {name, slots, price} = data;

    return (
        <div className="card w-[400px] shadow-xl">
            <div className="card-body">
                <h2 className="card-title mx-auto text-secondary">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another Day' }</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'}</p>
                <p className='hover-bordered'> <span >$</span> {price}</p>
                <div className="card-actions justify-center">
                   
                   <label
                    disabled={slots.length === 0}
                    htmlFor="booking-modal" 
                    onClick={() => setTreatment(data)}
                    className="btn btn-secondary text-white bg-gradient-to-r to-secondary from-primary"
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;