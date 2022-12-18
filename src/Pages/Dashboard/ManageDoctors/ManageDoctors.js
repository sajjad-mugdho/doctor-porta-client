import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ManageDoctors = () => {

    const {data: doctors} = useQuery({
        queryKey: ['doctors'],
        queryFn: async () =>{
            try {
                const res = await fetch('http://localhost:5000/doctors', {
                    method: "GET",
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                    
                });
                const data = await res.json();
                return data;

            } catch (error) {
                
            }
        }
    })
    return (
        <div>
             <h1 className='text-2xl font-bold'>Manage Doctor: {doctors?.length}</h1>
        </div>
    );
};

export default ManageDoctors;