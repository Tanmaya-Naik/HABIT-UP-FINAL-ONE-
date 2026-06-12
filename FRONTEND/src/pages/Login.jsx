import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(
        "/auth/login",
        formData
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      navigate("/dashboard");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Login Failed"
      );
    }
  };

  return (
  <div className="min-h-screen bg-black flex items-center justify-center px-4">

    <form
      onSubmit={handleSubmit}
      className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 w-full max-w-md"
    >

      <h1 className="text-4xl font-bold text-center mb-2 text-white">
        Welcome Back
      </h1>

      <p className="text-zinc-400 text-center mb-8">
        Continue your HabitUP journey
      </p>

      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        className="w-full bg-zinc-800 text-white p-4 rounded-xl mb-4 outline-none"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        className="w-full bg-zinc-800 text-white p-4 rounded-xl mb-6 outline-none"
      />

      <button
        type="submit"
        className="w-full bg-yellow-500 text-black py-4 rounded-xl font-bold hover:bg-yellow-400"
      >
        Login
      </button>

    </form>

  </div>
);
}

export default Login;