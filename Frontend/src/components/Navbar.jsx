import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  console.log(user)

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
 
        <h1 className="text-2xl font-bold text-red-600">MyTiq</h1>

        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li className="hover:text-red-600 cursor-pointer">
            <Link to="/">Accueil</Link>
          </li>
          <li className="hover:text-red-600 cursor-pointer">
            <Link to="/events">Evenements</Link>
          </li>
          {/* {user && ( */}
            <li className="hover:text-red-600 cursor-pointer">
              <Link to="/mestickets">Mes tickets</Link>
            </li>
          {/* )} */}
          {/* {user?.role === "admin" && ( */}
            <>
              <li className="hover:text-red-600 cursor-pointer">
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </>
          {/* )} */}
        </ul>

        <div className="hidden md:flex">
          {/* {user ? ( */}
            <>
              {/* <span>Hello {user.name}</span> */}
              {/* <button
                className="hidden md:block text-white font-medium bg-red-600 px-4 py-2 rounded-md hover:bg-red-700 cursor-pointer transition"
                onClick={logout}
              >
                Deconnexion
              </button> */}
            </>
          {/* ) : ( */}
            <div  className="flex gap-6"  > 
            <Link
              to="/connexion"
              className="block text-gray-700 border border-gray-300 px-4 py-2 rounded-md hover:bg-red-600 hover:text-white"
            >
              Connexion
            </Link>
            <Link
              to="/inscription"
              className="block text-white bg-red-600 px-4 py-2 rounded-md hover:bg-red-700"
            >
              S’inscrire
            </Link>
            </div>
          {/* )} */}
        </div>

        {/* Mobile button */}
        <div className="md:hidden flex items-center gap-20">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            ☰
          </button>
          <div className="flex gap-2">
            <Link
              to="/connexion"
              className="block text-gray-700 border border-gray-300 px-4 py-2 rounded-md hover:bg-red-600 hover:text-white"
            >
              Connexion
            </Link>
            <Link
              to="/inscription"
              className="block text-white bg-red-600 px-4 py-2 rounded-md hover:bg-red-700"
            >
              S’inscrire
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white border-t border-gray-200">
          <Link className="block hover:text-red-600" to="/">Accueil</Link>
          <Link className="block hover:text-red-600" to="/events">Evenements</Link>

          {user && (
            <Link className="block hover:text-red-600" to="/mestickets">
              Mes tickets
            </Link>
          )}

          {user?.role === "admin" && (
            <>
              <Link className="block hover:text-red-600" to="/dashboard">Dashboard</Link>
              <Link className="block hover:text-red-600" to="/addEvent">Add Event</Link>
            </>
          )}

          {user && (
            <button
              onClick={logout}
              className="block text-left text-red-600 font-bold"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
}