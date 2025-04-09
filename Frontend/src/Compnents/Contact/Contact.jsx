import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4 bg-gray-100 dark:bg-slate-900">
      <div className="bg-white mt-20 dark:bg-gray-800 dark:text-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white">
          Contact Us
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
          We'd love to hear from you! Fill out the form below.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name Field */}
          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              {...register("name", { required: "Name is required" })}
              className="w-full mt-1 py-2 px-3 border rounded-md outline-none focus:ring focus:ring-blue-300 dark:bg-gray-800 dark:text-white"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              placeholder="Email address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              className="w-full mt-1 py-2 px-3 border rounded-md outline-none focus:ring focus:ring-blue-300 dark:bg-gray-800 dark:text-white"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              placeholder="Type your message"
              {...register("message", { required: "Message is required" })}
              className="w-full mt-1 py-2 px-3 border rounded-md outline-none focus:ring focus:ring-blue-300 dark:bg-gray-800 dark:text-white"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md 
                       hover:bg-blue-700 dark:hover:bg-blue-600 duration-200 
                       transition-all shadow-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
