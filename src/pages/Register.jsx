import { React, useState } from 'react';
import { useForm } from 'react-hook-form'
import { HiUserAdd } from 'react-icons/hi'
import axios from 'axios'
import { Navigate } from 'react-router-dom';

const baseUrl = `${process.env.REACT_APP_BASE_URL}/user`;

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const password = watch('password', '');
  const email = watch('email', '');
  const [user, setUser] = useState(null);

  const onSubmit = (data) => {
    axios
        .post(baseUrl, data)
        .then(function (response) {
            console.log(response);
            setUser(response);
        })
        .catch(function (error) {
            //console.log(error);
        });
  };

  return (
   
    <div className='card w-96 bg-base-100 shadow-xl p-10'>

        <h1 className="text-3xl font-semibold text-center mb-4">Register</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="">

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

            <div className="form-group">
                <label className="block font-medium mt-4">Repeat Password</label>
                <input
                {...register('repeat_password', {
                    required: 'required',
                    validate: (value) =>
                    value === password || 'passwords do not match',
                })}
                type='password'
                id='repeat_password'
                placeholder='repeat password ...'
                className="mt-1 p-1 pl-2 block w-full shadow-sm rounded-md"
                />
                {errors.repeat_password && <p className="text-red-500 text-xs mt-1">{errors.repeat_password.message}</p>}
            </div>

            <div className='flex justify-end'>
                <div className="mt-8">
                    <button type='submit' className="btn btn-primary px-6 btn-sm">
                        <HiUserAdd className='mr-2'/> Submit
                    </button>
                </div>
            </div>
        </form>
        {user && ( <Navigate to="/registration_success" />)}
    </div>

  );
}
