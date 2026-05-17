import { Leaf } from "lucide-react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="w-full border-b border-gray-200 bg-white/90 backdrop-blur-lg sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <NavLink
            to="/"
            className="flex items-center gap-3 cursor-pointer"
          >

            <div className="w-11 h-11 rounded-full bg-gradient-to-r from-green-500 to-lime-400 flex items-center justify-center shadow-lg shadow-green-200">

              <Leaf className="text-white w-6 h-6" />

            </div>

            <h1 className="text-2xl font-extrabold text-[#07130A]">

              Ripe<span className="text-green-500">AI</span>

            </h1>

          </NavLink>

          {/* LINKS */}
          <div className="hidden md:flex items-center gap-10">

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 font-bold"
                  : "text-gray-600 font-semibold hover:text-green-500 transition duration-300"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/analyze"
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 font-bold"
                  : "text-gray-600 font-semibold hover:text-green-500 transition duration-300"
              }
            >
              Analyze
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 font-bold"
                  : "text-gray-600 font-semibold hover:text-green-500 transition duration-300"
              }
            >
              About
            </NavLink>

          </div>

          {/* BUTTON */}
          <NavLink to="/analyze">

            <button className="bg-gradient-to-r from-green-500 to-lime-400 text-white px-7 py-3 rounded-full font-semibold shadow-lg shadow-green-200 hover:scale-105 hover:shadow-xl transition duration-300">

              Try Now

            </button>

          </NavLink>

        </div>

      </div>

    </nav>
  );
}

export default Nav;