// import { useState } from "react";
import toast from "react-hot-toast";
import { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {

    const { createUser, setUser, signInWithGoogle } = use(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    
    // const [form, setForm] = useState({
    //     name: "",
    //     email: "",
    //     password: "",
    // });

    // const handleChange = (e) =>
    //     setForm({ ...form, [e.target.name]: e.target.value });

    const handleRegister = (e) => {
        e.preventDefault();
        console.log(e.target)
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        const lengthPattern = /^.{6,}$/;
        const casePattern = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
        if (!lengthPattern.test(password)) {
            setError("Password Length must be at least 6 character")
            return;
        }
        else if (!casePattern.test(password)) {
            setError("Password Must have an Uppercase letter and a Lowercase letter")
            return;
        }
        else {
            setError("");
        }
        console.log({ name, email, photo, password });

        createUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                setUser(user);
                navigate(`${location.state ? location.state : "/"}`);
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                toast.success(errorMessage);
            });

        // toast.success("Account created successfully!");
    };

    const handleTogglePasswordShow = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    }

    const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        const user = result.user;
        console.log(user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorCode);
        toast.success(errorMessage);
      })
  };

    return (
        <div className="max-w-md mx-auto my-10 bg-white p-8 rounded-2xl shadow">
            <h2 className="text-3xl font-bold text-center mb-6">Signup</h2>

            <form onSubmit={handleRegister} className="space-y-4">

                {/* Name */}
                <label className="label">Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="input input-bordered w-full"
                    //onChange={handleChange}
                    required
                />
                {/* Email */}
                <label className="label">Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered w-full"
                    //onChange={handleChange}
                    required
                />
                {/* Photo */}
                <label className="label">Photo</label>
                <input
                    type="text"
                    name="photo"
                    placeholder="Photo-URL"
                    className="input input-bordered w-full"
                    //onChange={handleChange}
                    required
                />

                {/* Password */}
                <div className="relative">
                    <label className="label">Password</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        placeholder="Password"
                        className="input input-bordered w-full"
                        //onChange={handleChange}
                        required
                    />
                    <button 
                    onClick={handleTogglePasswordShow}
                    className="btn btn-xs absolute top-8 right-4 outline-none">
                        {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                    </button>
                </div>

                {error && <p className="text-xs text-error">{error}</p>}

                <button
                    type="submit"
                    className="btn w-full bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white border-none"
                >
                    Register
                </button>
            </form>

            {/* Google */}
            <button onClick={handleGoogleSignIn}
            className="btn bg-white text-black border-[#e5e5e5] w-full my-3 hover:bg-base-300">
                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                Continue with Google
            </button>


            <p className="text-center mt-4 text-sm">
                Already have an account?{" "}
                <Link to="/auth/login" className="text-[#632ee3] font-semibold">
                    Login
                </Link>
            </p>
        </div>
    );
};

export default SignUp;
