import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:4001/user/signup", data);

      if (res.data.user) {
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        toast.success('Signup Successfully');

        // Navigate and reload after short delay
        setTimeout(() => {
          navigate(from, { replace: true });
          window.location.reload();
        }, 500);
      }
    } catch (err) {
      if (err.response) {
        toast.error("Error: " + err.response.data.message);
      }
    }
  };

  return (
    <div className='flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-800'>
      <div className='relative bg-white dark:bg-slate-900 p-6 rounded-lg shadow-lg w-96 text-gray-900 dark:text-white'>
        <form onSubmit={handleSubmit(onSubmit)} method='dialog'>
          {/* Close Button */}
          <Link to='/' className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-white'>
            ✕
          </Link>
          
          <h3 className='font-bold text-lg text-center'>Signup</h3>

          {/* Name Input */}
          <div className='mt-4 space-y-2'>
            <label className='block'>Name</label>
            <input
              type='text'
              placeholder='Enter your full name'
              className='w-full py-1 border border-gray-300 dark:border-gray-600 rounded-md outline-none px-2 bg-transparent dark:text-white'
              {...register('fullname', { required: 'Name is required' })}
            />
            {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname.message}</p>}
          </div>

          {/* Email Input */}
          <div className='mt-4 space-y-2'>
            <label className='block'>Email</label>
            <input
              type='email'
              placeholder='Enter your email'
              className='w-full py-1 border border-gray-300 dark:border-gray-600 rounded-md outline-none px-2 bg-transparent dark:text-white'
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address'
                }
              })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Password Input */}
          <div className='mt-4 space-y-2'>
            <label className='block'>Password</label>
            <input
              type='password'
              placeholder='Enter your password'
              className='w-full py-1 border border-gray-300 dark:border-gray-600 rounded-md outline-none px-2 bg-transparent dark:text-white'
              {...register('password', { 
                required: 'Password is required',
                minLength: { value: 6, message: 'Password must be at least 6 characters' }
              })}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          {/* Sign-Up Button */}
          <div className='flex justify-between items-center mt-4'>
            <button type='submit' className='bg-pink-500 text-white rounded-md px-4 py-1 hover:bg-pink-700 duration-200'>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
