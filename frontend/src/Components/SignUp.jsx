import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from 'axios'
import toast from "react-hot-toast";
const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    const userinfo = {
      fullname : data.fullname,
      email: data.email,
      password:data.password,

    }

    await axios.post("http://localhost:8000/user/signup",userinfo)
    .then((res)=>{
      console.log(res.data);
      if(res.data){
        toast.success("Signup Successfull")
      }
      localStorage.setItem("User",JSON.stringify(res.data.user));
    }).catch((err)=>{
      console.log("User already exist", err);
     toast.error("User already exist with same email adress and password");
    })
   console.log(data);
  }
  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                SignUp
              </h1>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 md:space-y-6"
              >
                <div>
                  <label
                    for="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Usename
                  </label>
                  <input
                    {...register("fullname", { required: true })}
                    defaultValue=""
                    {...register("fullname")}
                    type="fullname"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="xyz"
                    required=""
                  />
                  {errors.fullname && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    {...register("email", { required: true })}
                    defaultValue=""
                    {...register("email")}
                    type="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                  {errors.email && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    {...register("password", { required: true })}
                    defaultValue=""
                    {...register("password")}
                    type="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                  {errors.password && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-black rounded-full"
                >
                  Sign Up
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  already have an account{" "}
                  <Link
                    to={"/login"}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
