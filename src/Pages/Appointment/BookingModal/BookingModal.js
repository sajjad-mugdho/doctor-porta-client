import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate }) => {
    const { name, slots } = treatment;
    console.log(treatment);
    const date = format(selectedDate, "PP")

    const handleBooking = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const number = form.number.value;
        const slots = form.slots.value;

        console.log(name, email, number, slots)
        form.reset()
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-center">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} placeholder="Selected Date" className="input bg-base-200 input-bordered w-full" />
                        <select name='slots' className="select bg-base-200 select-ghost w-full">
                            {
                                slots?.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Your Name" className="input input-bordered w-full" />
                        <input name='email' type="email" placeholder="Email" className="input input-bordered w-full" />
                        <input name='number' type="number" placeholder="Number" className="input input-bordered w-full" />
                        <input type="submit" value="Submit" className='btn w-full' />
                    </form>
                </div>
            </div>

        </>
    );
};

export default BookingModal;