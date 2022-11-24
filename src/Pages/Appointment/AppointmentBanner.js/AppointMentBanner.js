import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import bgchair from '../../../assets/images/bg.png';


const AppointMentBanner = ({selectedDate, setSelectedDate}) => {
    

    return (
        <header style={{background: `url(${bgchair})`, backgroundPosition: "center",
        backgroundSize: "cover",}} className='p-16'>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className=" mx-auto lg:w-1/3 rounded-lg shadow-2xl" alt='' />
                    <div className='mx-auto'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>

                </div>
            </div>
        </header>
    );
};

export default AppointMentBanner;