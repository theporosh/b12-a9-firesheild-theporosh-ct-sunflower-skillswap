import { useState } from "react";

import toast from "react-hot-toast";
import { Link } from "react-router";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Logged in successfully!");
  };

  return (
    <div className="max-w-md mx-auto my-10 bg-white p-8 rounded-2xl shadow">
      <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input input-bordered w-full"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input input-bordered w-full"
          onChange={handleChange}
          required
        />

        <div><a className="link link-hover">Forgot password?</a></div>

        <button
          type="submit"
          className="btn w-full bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white border-none"
        >
          Login
        </button>
      </form>
      <p className="text-center mt-4 text-sm">
        Don’t have an account?{" "}
        <Link to="/signup" className="text-[#632ee3] font-semibold">
          Signup
        </Link>
      </p>
    </div>
  );
};

export default Login;
