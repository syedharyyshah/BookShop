import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:4001/user/login", data);

      if (res.status === 200 && res.data.user) {
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        toast.success('Login Successfully');
        document.getElementById("my_modal_3").close();

        // Reload after a short delay to ensure modal is closed
        setTimeout(() => {
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
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close Button */}
            <Link
              className="btn btn-sm btn-circle btn-ghost absolute top-3 right-3"
              to="/"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-xl text-gray-800 dark:text-white">Login</h3>

            {/* Email Input */}
            <div className="mt-4">
              <label className="block text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-1 py-2 px-3 border rounded-md outline-none focus:ring focus:ring-blue-300 dark:bg-gray-800 dark:text-white"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            {/* Password Input */}
            <div className="mt-4">
              <label className="block text-gray-700 dark:text-gray-300">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full mt-1 py-2 px-3 border rounded-md outline-none focus:ring focus:ring-blue-300 dark:bg-gray-800 dark:text-white"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            {/* Login Button and Sign-Up Link */}
            <div className="flex justify-between items-center mt-6">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-600 transition"
              >
                Login
              </button>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Not Registered?{" "}
                <Link to="/SignUp" className="underline text-blue-500">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
