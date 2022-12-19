import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const ManageDoctors = () => {

    const [deleteDoctor, setDeleteDoctor] = useState(null);

    const closeModal = () => {
        setDeleteDoctor(null);
    }

    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
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

    const handleDeleteDoctor = (doctor) => {
        fetch(`http://localhost:5000/doctors/${doctor._id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearar ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json()).then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                toast.success(`Delete ${doctor.name} Successfuly`)
                refetch()
            }
            
        })
    }

    return (
        <div>
            <h1 className='text-2xl font-bold mb-5'>Manage Doctor: {doctors?.length}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Avater</th>
                            <th>Doctor Name</th>
                            <th>Email</th>
                            <th>Spacialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            doctors?.map((doctor, i) =>
                                <tr>
                                    <th>{i + 1}</th>
                                    <td><div className="avatar">
                                        <div className="w-16 mask mask-squircle">
                                            <img src={doctor.image} alt="" />
                                        </div>
                                    </div></td>
                                    <td>{doctor.name}</td>
                                    <td>{doctor.email}</td>
                                    <td>{doctor.specialty}</td>
                                    <td>
                                    <label onClick={() => setDeleteDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-sm btn-error text-white">Delete</label>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>



                </table>
            </div>
            {
                deleteDoctor && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deleteDoctor.name}. It cannot be undone.`}
                    successAction = {handleDeleteDoctor}
                    successButtonName="Delete"
                    modalData = {deleteDoctor}
                    closeModal = {closeModal}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default ManageDoctors;