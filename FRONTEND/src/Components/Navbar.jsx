import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6 border-b border-zinc-900">
      <h1 className="text-2xl font-bold text-yellow-500">
        HabitUP
      </h1>

      <div className="flex gap-8">
        <Link
          to="/"
          className="hover:text-yellow-500 transition"
        >
          Home
        </Link>

        <Link
          to="/login"
          className="hover:text-yellow-500 transition"
        >
          Login
        </Link>

        <Link
          to="/signup"
          className="hover:text-yellow-500 transition"
        >
          Signup
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;