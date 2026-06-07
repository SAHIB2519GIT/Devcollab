import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../services/authService";
import { useAuthStore } from "../store/authStore";

function LoginPage() {
  const navigate = useNavigate();

  const setUser =
    useAuthStore((state) => state.setUser);

  const [formData, setFormData] = useState({
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

    } catch (error: any) {
      console.log(error);

      alert(
        error?.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">

      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 p-8 rounded-xl w-[400px]"
      >

        <h1 className="text-white text-4xl font-bold mb-8">
          Login
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-4 mb-4 rounded bg-zinc-800 text-white"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-4 mb-6 rounded bg-zinc-800 text-white"
          required
        />

        <button
          type="submit"
          className="w-full bg-white text-black py-3 rounded font-semibold"
        >
          Login
        </button>

        <p className="text-gray-400 text-center mt-4">
          Don't have an account?{" "}
          <span
            className="text-blue-400 cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </p>

      </form>

    </div>
  );
}

export default LoginPage;