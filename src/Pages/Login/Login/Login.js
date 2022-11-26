
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Login = () => {

    const { register, handleSubmit, formState: {errors} } = useForm();
    const {signIn} = useContext(AuthContext);

    const [loginErorr, setLoginErorr] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/'

    const handleLogin = data => {
        console.log(data);
        setLoginErorr('')
        signIn(data.email, data.password).then(result => {
            const user = result.user;
            console.log(user)
            toast('Login Succsessful')
            navigate(from, {replace: true})
        }).catch(err => {
            console.error(err.message)
            setLoginErorr(err.message)
        })
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>

            <div className='w-96 p-7 shadow-xl rounded-lg'>
                <h1 className='text-xl text-center'>Login</h1>

                <form className='p-5' onSubmit={handleSubmit(handleLogin)}>
                    <label className='lable' htmlFor="">Email</label>
                    <input {...register("email", {required : "Email is requied"})} type='email' className="mb-5 input input-bordered w-full max-w-xs" placeholder="Email" />
                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p> }
                    <br />
                    <label className='lable' htmlFor="">Password</label>
                    <input {...register("password", {required : "Password is requred minmum 6", minLength: 6})} type='password' className=" mb-5  input input-bordered w-full max-w-xs" placeholder="password" />
                    <label htmlFor="">Forgot Password?</label>
                    {errors.password && <p className='text-red-600'>{errors.password?.message}</p> }
                    <input className='btn btn-accent w-full' type="submit" value='Login' />
                    {loginErorr && <p className='text-red-600'>{loginErorr}</p> }
                    <p className='mt-5'>New to Doctors Portal? <Link className='text-secondary' to={'/signup'}>Create new account</Link> </p>
                </form>
                <div className="divider">OR</div>
                <button className='btn btn-accent btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;