import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({selectedDate}) => {
    // const [appoinmentData, setAppointmentData] = useState([]);
    const [treatment, setTreatment] = useState({});
    const date = format(selectedDate, "PP")

    const {data: appoinmentData = [], refetch} = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: () => fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
        .then(res => res.json())
    })

    // useEffect(() => {
    //     fetch('http://localhost:5000/appointmentOptions')
    //     .then(res => res.json())
    //     .then(data => setAppointmentData(data))
    // } ,[])
    return (
        <section className='my-16'>
            <p className='text-lg text-secondary font-semibold text-center mb-8'>Available Services on {format(selectedDate, "PP")}</p>
            <div className='grid gap-6 text-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appoinmentData.map(data => <AppointmentOption
                     key={data._id}
                     data={data}
                     setTreatment={setTreatment}
                     
                    >

                    </AppointmentOption>)
                }
            </div>
            {treatment && <BookingModal treatment={treatment} setTreatment={setTreatment} refetch ={refetch} selectedDate={selectedDate}></BookingModal>}
        </section >
    );
};

export default AvailableAppointment;