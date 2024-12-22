import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Anime World</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-400">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-400">About</Link>
          </li>
          <li>
            <Link to="/anime-list" className="hover:text-gray-400">Anime List</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
