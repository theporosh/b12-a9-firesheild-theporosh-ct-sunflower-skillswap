import { useState } from "react";

import toast from "react-hot-toast";
import { Link } from "react-router";

const SignUp = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Account created successfully!");
    };

    return (
        <div className="max-w-md mx-auto my-10 bg-white p-8 rounded-2xl shadow">
            <h2 className="text-3xl font-bold text-center mb-6">Signup</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="input input-bordered w-full"
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered w-full"
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="photo"
                    placeholder="Photo-URL"
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
                <button
                    type="submit"
                    className="btn w-full bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white border-none"
                >
                    Register
                </button>
            </form>
            <p className="text-center mt-4 text-sm">
                Already have an account?{" "}
                <Link to="/login" className="text-[#632ee3] font-semibold">
                    Login
                </Link>
            </p>
        </div>
    );
};

export default SignUp;
