import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_IMAGE_API

    console.log(imageHostKey);

    const navigate = useNavigate()


    const { data: specialtis, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentSpecialty');
            const data = await res.json();
            return data
        }

    })

    const handleAddDoctor = data => {

        const image = data.image[0];

        console.log("imge data", image);

        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    }

                    // save doctor in database 
                    fetch('http://localhost:5000/doctors', {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                            authorization: `bearar ${localStorage.getItem("accessToken")}`
                        },
                        body: JSON.stringify(doctor)

                    }).then(res => res.json()).then(result => {
                        console.log(result);
                        toast.success(`${data.name} Added as a doctor`)
                        navigate('/dashboard/managedoctors')
                    })
                }

            })

    };

    if (isLoading) {
        return <progress className="progress w-56"></progress>
    }
    return (
        <div className='w-96 p-7'>
            <h1 className='text-2xl font-bold'>Add A Doctor</h1>
            <form onSubmit={handleSubmit(handleAddDoctor)} className='p-5'>
                <label className='lable' htmlFor="">Name</label>
                <input {...register("name", { required: "name is requied" })} type='text' className="mb-5 input input-primary input-bordered w-full max-w-xs" placeholder="Name" />
                <label className='lable' htmlFor="">Email</label>
                <input {...register("email", { required: "Email is requied" })} type='email' className="mb-5 input input-primary input-bordered w-full max-w-xs" placeholder="Email" />
                {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}

                <br />
                <label className='lable' htmlFor="">Specialty</label>
                <select {...register("specialty")} className="select select-primary w-full max-w-xs">

                    {
                        specialtis.map(specialty => <option
                            key={specialty._id}
                            value={specialty.name}
                        >{specialty?.name}</option>)
                    }

                </select>
                <label className='lable'>Upload Photo</label>
                <input type="file" {...register("image", {
                    required: "Photo is Required"
                })} className="input input-bordered w-full max-w-xs" />
                {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                <input className='btn btn-accent w-full' type="submit" value='Add Doctor' />
            </form>
        </div>
    );
};

export default AddDoctor;