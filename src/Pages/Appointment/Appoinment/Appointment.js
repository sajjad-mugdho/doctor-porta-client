import React, { useState } from 'react';
import AppointMentBanner from '../AppointmentBanner.js/AppointMentBanner';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date)
    return (
        <div>
            <AppointMentBanner selectedDate= {selectedDate} setSelectedDate={setSelectedDate} ></AppointMentBanner>
            <AvailableAppointment selectedDate={selectedDate}></AvailableAppointment>
        </div>
    );
};

export default Appointment;