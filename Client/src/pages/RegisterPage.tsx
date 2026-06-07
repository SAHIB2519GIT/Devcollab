import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { registerUser } from "../services/authService";

function RegisterPage() {

  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
    });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    try {

      await registerUser(formData);

      alert("Registration Successful 🚀");

      navigate("/login");

    } catch (error: any) {

      console.log(error);

      alert(
        error?.response?.data?.message ||
        "Registration Failed"
      );
    }
  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-black to-blue-950 flex items-center justify-center px-4">

      <form
        onSubmit={handleSubmit}
        className="
          bg-zinc-900/90
          backdrop-blur-md
          p-10
          rounded-2xl
          shadow-2xl
          w-full
          max-w-md
          border
          border-zinc-800
        "
      >

        <div className="text-center mb-8">

          <h1 className="text-5xl font-bold text-white mb-3">
            🚀 DevCollab
          </h1>

          <p className="text-zinc-400">
            Create your account and start collaborating
          </p>

        </div>

        <div className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="
              w-full
              p-4
              rounded-xl
              bg-zinc-800
              border
              border-zinc-700
              text-white
              focus:outline-none
              focus:border-blue-500
            "
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="
              w-full
              p-4
              rounded-xl
              bg-zinc-800
              border
              border-zinc-700
              text-white
              focus:outline-none
              focus:border-blue-500
            "
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="
              w-full
              p-4
              rounded-xl
              bg-zinc-800
              border
              border-zinc-700
              text-white
              focus:outline-none
              focus:border-blue-500
            "
          />

          <button
            type="submit"
            className="
              w-full
              bg-blue-600
              hover:bg-blue-700
              transition
              text-white
              py-4
              rounded-xl
              font-semibold
              cursor-pointer
            "
          >
            Create Account
          </button>

        </div>

        <p className="text-zinc-400 text-center mt-6">

          Already have an account?{" "}

          <span
            className="
              text-blue-400
              hover:text-blue-300
              cursor-pointer
              font-semibold
            "
            onClick={() => navigate("/login")}
          >
            Login
          </span>

        </p>

      </form>

    </div>

  );
}

export default RegisterPage;