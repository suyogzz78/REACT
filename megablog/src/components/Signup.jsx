import React from "react";
import { useDispatch } from "react-redux";
import { AppwriteService } from "../appwrite/service.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Input, Logo } from "./index.js";
import { useForm } from "react-hook-form";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [error, setError] = React.useState("");

  const signup = async (data) => {
    //async function is used to handle asynchronous operations like API calls
    setError("");
    try {
      const userdata = await AppwriteService.createAccount(data); //data contains email,password,name
      if (userdata) {
        const userdata = await AppwriteService.getCurrentUser();
        if (userdata) {
          dispatch(login({ userdata })); //login is action creator imported from authslice.js to update redux store with user data
          navigate("/"); //navigating to home page after successful signup
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full max-w-md p-8 border border-gray-300 rounded-lg shadow-lg mx-auto">
        <div className="flex justify-center mb-6">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="150px" />
          </span>
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center">
          SignIn to Your Account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit(signup)} className="mt-8">
          <div className="space-y-4 ">
            <Input
              label="Name"
              type="text"
              placeholder="Enter your name"
              {...register("name", { required: true })}
            />
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: true,
                validate: (value) =>
                  /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/gim.test(value) ||
                  "Invalid email address",
              })} //here ...register is used to register the input field with react-hook-form and it takes the field name and validation rules as arguments
            />

            <Input
              type="password"
              label="Password"
              placeholder="Enter your password"
              {...register("password", { required: true })}
            />
            <Button type="submit">Create Account</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
