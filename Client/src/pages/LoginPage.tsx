import { useState } from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  loginUser,
} from "../services/authService";

import {
  useAuthStore,
} from "../store/authStore";

function LoginPage() {

  const navigate = useNavigate();

  const setUser =
    useAuthStore((state) => state.setUser);

  const [formData, setFormData] =
    useState({
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

      const data =
        await loginUser(formData);

      setUser(data);

      navigate("/dashboard");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">

      <div className="bg-zinc-900 p-8 rounded-xl w-[400px]">

        <h1 className="text-3xl font-bold mb-6">
          Login
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-3 rounded bg-zinc-800"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-3 rounded bg-zinc-800"
          />

         <button
  type="submit"
  className="w-full bg-white text-black py-3 rounded font-semibold"
>
  Login
</button>

        </form>

      </div>

    </div>
  );
}

export default LoginPage;