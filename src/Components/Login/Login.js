import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const formData = { email: data.email, password: data.password };
    fetch("http://crm.softvalley.sveducrm.com/api/admin/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Logged In Successfully!");
          navigate("/mainHome");
          localStorage.setItem("token", data.data.token);
          console.log(data);
        }
      })
      .catch((e) => console.log(e));
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="border border-black w-4/12 rounded-xl mt-5">
        <h2 className="text-2xl font-medium uppercase text-center my-10">
          Login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="px-10">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email Adress</span>
            </label>
            <input
              {...register("email", { required: true })}
              type="text"
              className="w-full border py-3 rounded-xl focus:outline-none px-3"
            />
            {errors.email && (
              <span className="text-red-500">Email Adress is required</span>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              className="w-full border py-3 rounded-xl focus:outline-none px-3"
            />
            {errors.password && (
              <span className="text-red-500">Password is required</span>
            )}
          </div>
          <button type="submit" className="btn btn-block mt-5 mb-10">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
