import React from 'react';
import bg from '../../../assets/images/appointment.png';
import PrimaryBtn from '../../../Components/PrimaryBtn/PrimaryBtn';

const ContractUs = () => {
    return (
        <section className='p-5 rounded-xl mt-10' style={{background: `url(${bg})`}}>
            <div className='text-center my-10'>
                <p className='text-xl font-semibold text-secondary'>Contact Us</p>
                <h2 className='text-3xl font-semibold text-white'>Stay connected with us</h2>
            </div>
            <div className='lg:w-1/3 flex flex-col items-center mx-auto'>
            <input type="text" placeholder="Email Adress" className="input input-bordered input-success my-3 w-full " />
            <input type="text" placeholder="Subject" className="input input-bordered input-success w-full my-3" />
            <input type="text" placeholder="Message" className="input input-bordered input-success lg:h-[136px] lg:w-[420px] my-3" />
            <PrimaryBtn>Submit</PrimaryBtn>
            </div>

        </section>
    );
};

export default ContractUs;