import { React, useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { Link, Navigate } from 'react-router-dom'
import { HiLogin } from 'react-icons/hi'

const baseUrl = `${process.env.REACT_APP_BASE_URL}/login`;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const password = watch('password', '');
  const email = watch('email', '');
  const [user, setUser] = useState(null);
  const [wrongCredential, setWrongCretendtial] = useState(false);

  const onSubmit = (data) => {
    console.log(baseUrl);
    axios
        .post(baseUrl, data)
        .then(function (response) {
            console.log(response);
            setUser(response);
        })
        .catch(function (error) {
            setWrongCretendtial(true);
        });
  };

  return (
    <div className='card w-96 bg-base-100 shadow-xl p-10'>

        <h1 className="text-3xl font-semibold text-center mb-4">Log In</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="">

            { wrongCredential && ( 
                <div className='my-6'>
                    <p className='text-lg text-red-500 font-semibold text-center'>• Wrong Credential</p>
                </div>
             )}
            
            <div className="form-group">
                <label className="block font-medium mt-4">Email</label>
                <input
                {...register('email', {
                    required: 'required',
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: 'invalid email address',
                    },
                })}
                type='email'
                id='email'
                placeholder='user@mail.com'
                className="mt-1 p-1 pl-2 block w-full shadow-sm rounded-md"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            <div className="form-group">
                <label className="block font-medium mt-4">Password</label>
                <input
                {...register('password', {
                    required: 'required',
                    minLength: { value: 8, message: 'min 8 characters' },
                    pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message: 'must contain at least one lower character, one upper character, one digit, one special character, and 8 characters long',
                    },
                })}
                type='password'
                id='password'
                placeholder='type password ...'
                className="mt-1 p-1 pl-2 block w-full shadow-sm rounded-md"
                />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
            </div>

            <div className='flex justify-end'>
                <div className="mt-8">
                    <button type='submit' className="btn btn-primary px-6 btn-sm">
                    <HiLogin className='mr-2'/> Log In
                    </button>
                </div>
            </div>

            <div className='mt-4 text-end'>
                <p>Don't have account?</p>
                <p>Please <Link to={'/register'} className='text-blue-600 underline'>Register</Link></p>
            </div>
        </form>
        { user && ( <Navigate to="/dashboard" /> )}
    </div>
  );
}
