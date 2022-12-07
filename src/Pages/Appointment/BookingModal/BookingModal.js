import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
    const { name: treatmentName, slots } = treatment;
    console.log(treatment);
    const date = format(selectedDate, "PP")
    const { user } = useContext(AuthContext);


    const handleBooking = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const number = form.number.value;
        const slot = form.slot.value;

        const booking = {
            appointmentDate: date,
            treatment: treatmentName,
            paitant: name,
            slot,
            email,
            number,

        }

        console.log(booking)
        form.reset()

        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        }).then(res => res.json()).then(data => {
            console.log(data);
            if (data.acknowledged) {
                setTreatment(null)
                toast.success("Booking Confirmed")
                refetch()
            }
        })
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-center">{treatmentName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} placeholder="Selected Date" className="input bg-base-200 input-bordered w-full" />
                        <select name='slot' className="select bg-base-200 select-ghost w-full">
                            {
                                slots?.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Your Name" value={user?.displayName} className="input input-bordered w-full" />
                        <input name='email' type="email" placeholder="Email" value={user?.email} className="input input-bordered w-full" />
                        <input name='number' type="number" placeholder="Number" className="input input-bordered w-full" />
                        <input type="submit" value="Submit" className='btn w-full' />
                    </form>
                </div>
            </div>

        </>
    );
};

export default BookingModal;