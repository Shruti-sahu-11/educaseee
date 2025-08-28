
import React, { useState } from "react";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form submitted:", form);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Create your <br /> PopX Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
          <span className='text-red-600 absolute ml-2'>*</span>
          </div>

          <div  className="flex">
          <input
            type="number"
            name="name"
            placeholder="Phone number"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
          <span className='text-red-600 absolute ml-2'>*</span>
          </div>

          <div  className="flex">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
          <span className='text-red-600 absolute ml-2'>*</span>
          </div>
          
          <div className="flex">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
          <span className='text-red-600 absolute ml-2'>*</span>
          </div>

          <div className="flex">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
          <span className='text-red-600 absolute ml-2'>*</span>
          </div>

          <div className="flex">
          <input
            type="text"
            name="name"
            placeholder="Company Name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
          <span className='text-red-600 absolute ml-2'>*</span>
          </div>

          <h1 className='text-xs font-medium'>Are you in Agency ?<span className='text-red-600'>*</span></h1>
         
          <input type="radio" id='yes' value='yes'/>
          <label className='text-xs mx-2' for='html'>Yes</label>
          <input type='radio' id='no' value='no'/>
          <label className='text-xs' for='html'>No</label>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;