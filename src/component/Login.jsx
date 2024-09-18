import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { useFormik } from "formik";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";

const Login = () => {
	const [showPassword, setShowPassword] = useState(false);
	const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

	const {handleChange,handleSubmit,values} = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		onSubmit: (value) => {
			try {
				signInWithEmailAndPassword(auth, value.email, value.password).then((userCredential) => {
					const user = userCredential.user;
                    localStorage.setItem("userToken", user.uid)
					toast.success("Login Successful")
					navigate("/home")
				}).catch((error) => {
					toast.error(error.message)
				})
			} catch (error) {
				toast.error(error.message)
			}

		},
	})
	return (
		<>		
		<div className="h-screen md:flex">
			<div
				className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
				<div>
					<h1 className="text-white font-bold text-4xl font-sans">Professional Cv Maker</h1>
					<p className="text-white mt-1">Craft your perfect CV with the leading professional builder.</p>
					<button type="submit" className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button>
				</div>
				<div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
				<div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
				<div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
				<div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
			</div>
			<div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
				<form onSubmit={handleSubmit} className="bg-white">
					<h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
					<p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
					<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
							viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
						</svg>
						<input className="pl-2 outline-none border-none" type="email" name="email" 
						onChange={handleChange} value={values.email} placeholder="Email Address" />
					</div>
					<div className="flex items-center border-2 py-2 px-3 rounded-2xl">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
							fill="currentColor">
							<path fill-rule="evenodd"
								d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
								clip-rule="evenodd" />
						</svg>
						<input class="pl-2 outline-none border-none" type={showPassword ? "text" : "password"}
						 name="password" onChange={handleChange} value={values.password  } id="" placeholder="Password" />
                        <div onClick={togglePasswordVisibility}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </div>
					</div>
					<span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span>
					<button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
					<section className="flex p-2 gap-4 items-center">
						<FaGoogle className="cursor-pointer   rounded-full" />
						<FaFacebookF className="cursor-pointer" />
						<FaGithub className="cursor-pointer" />
						<FaTwitter className="cursor-pointer" />
					</section>
					<p className="flex pl-2 text-sm leading-4 text-gray-400 my-2">
						Don't have an account?
						<NavLink to="/signup" className="text-black  pl-1 text-sm -my-[2px] hover:underline hover:text-indigo-400">
							Sign up
						</NavLink>
					</p>
				</form>
			</div>
		</div>
		</>
	)
};

export default Login