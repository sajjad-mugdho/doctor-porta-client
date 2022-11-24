import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
import PrimaryBtn from '../../../Components/PrimaryBtn/PrimaryBtn';

const MakeAppointment = () => {
    return (
        <section className='mt-32' style={{background: `url(${appointment})`}}>
            <div className="hero mb-2">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className="-mt-32 hidden md:block lg:block lg:w-1/2 rounded-lg" alt='' />
                    <div>
                        <p className='text-secondary text-lg font-bold'>Appointment</p>
                        <h1 className="text-5xl font-bold text-white">Make an appointment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryBtn>Get Started</PrimaryBtn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;