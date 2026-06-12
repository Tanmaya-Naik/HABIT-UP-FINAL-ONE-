import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    try {
      await api.post(
        "/auth/register",
        formData
      );

      alert(
        "Registration Successful"
      );

      navigate("/login");
    } catch (error) {
      alert(
        error.response?.data
          ?.message ||
          "Registration Failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

        <h1 className="text-4xl font-bold text-white text-center">
          Join HabitUP
        </h1>

        <p className="text-zinc-400 text-center mt-2">
          Start your transformation journey
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="w-full bg-zinc-800 text-white p-4 rounded-xl outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full bg-zinc-800 text-white p-4 rounded-xl outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full bg-zinc-800 text-white p-4 rounded-xl outline-none"
          />

          <button
            type="submit"
            className="w-full bg-yellow-500 text-black font-semibold p-4 rounded-xl hover:bg-yellow-400"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-zinc-400 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-yellow-500"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}


export default Signup;