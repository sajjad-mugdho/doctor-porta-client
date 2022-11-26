import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const SignUP = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createEmailUser, updateUser } = useContext(AuthContext);

    const [signUpErorr, setSignUpErorr] = useState('')

    const handleSignUp = data => {
        console.log(data);
        setSignUpErorr('')
        createEmailUser(data.email, data.password).then(result => {
            const user = result.user;
            console.log(user)
            const userInfo = {
                displayName: data.name,
            }
            updateUser(userInfo)
            toast("Sign Up Succsesfull")
        }).catch(err => {
            console.error(err)
            setSignUpErorr(err.message)
        })
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>

            <div className='w-96 p-7 shadow-xl rounded-lg'>
                <h1 className='text-xl text-center'>Sign Up</h1>

                <form onSubmit={handleSubmit(handleSignUp)} className='p-5'>
                    <label className='lable' htmlFor="">Name</label>
                    <input {...register("name", { required: "name is requied" })} type='text' className="mb-5 input input-bordered w-full max-w-xs" placeholder="Email" />
                    <label className='lable' htmlFor="">Email</label>
                    <input {...register("email", { required: "Email is requied" })} type='email' className="mb-5 input input-bordered w-full max-w-xs" placeholder="Email" />
                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}

                    <br />
                    <label className='lable' htmlFor="">Password</label>
                    <input {...register("password", { required: "password must a Upper case, a Lowercase, a Number.", minLength: 6, pattern: { value: /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$/, message: "password must a Upper case, a Lowercase, a Number." } })} type='password' className=" mb-5  input input-bordered w-full max-w-xs" placeholder="password" />

                    {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    {signUpErorr && <p className='text-red-600'>{signUpErorr}</p>}
                    <input className='btn btn-accent w-full' type="submit" value='Sign Up' />
                    <p className='mt-5'>Already have an Account?<Link className='text-secondary' to={'/login'}>Please Login</Link> </p>
                </form>
                <div className="divider">OR</div>
                <button className='btn btn-accent btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUP;