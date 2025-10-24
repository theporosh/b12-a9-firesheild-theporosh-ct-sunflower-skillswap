import toast from "react-hot-toast";
import { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [emailValue, setEmailValue] = useState(""); // state declare

  
  const { signIn, signInWithGoogle } = use(AuthContext); 

  const location = useLocation();
  const navigate = useNavigate();
  
// const handleChange = (e) =>
  //   setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    //console.log({ email, password });
    signIn(email, password)
      .then(result => {
        const user = result.user;
        //console.log(user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // alert(errorMessage);
        setError(errorCode);
        toast.success(errorMessage);
      });
    // toast.success("Logged in successfully!");

  };

  const handleTogglePasswordShow = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        const user = result.user;
        //console.log(user);
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
      <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

      <form onSubmit={handleLogin} className="space-y-4">

        {/* Email */}
        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input input-bordered w-full"
          onChange={(e) => setEmailValue(e.target.value)} // store email
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


       {/* Forgot password link */}
        <div>
          <Link
            to={`/auth/forgot-password?email=${encodeURIComponent(emailValue)}`}
            className="link link-hover text-sm text-[#632ee3]"
          >
            Forgot password?
          </Link>
        </div>



        {
          error && <p className="text-red-400 text-xs">{error}</p>
        }

        <button
          type="submit"
          className="btn w-full bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white border-none"
        >
          Login
        </button>
      </form>

      {/* Google Sign In */}
      <button onClick={handleGoogleSignIn}
      className="btn bg-white text-black border-[#e5e5e5] w-full my-3 hover:bg-base-300">
        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
        Continue with Google
      </button>


      <p className="text-center mt-4 text-sm">
        Don’t have an account?{" "}
        <Link to="/auth/signup" className="text-[#632ee3] font-semibold">
          Signup
        </Link>
      </p>
    </div>
  );
};

export default Login;
