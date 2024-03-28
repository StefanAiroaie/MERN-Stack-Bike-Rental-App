import { Link } from "react-router-dom";
import logo from "../../public/bikings.png"

const Nav = () => {
  return (
    <>
    <header>
      <nav className="flex justify-center items-center space-x-3 p-2 bg-lime-400">
        
        <Link to={"/"}>
          <img className="w-20" src={logo} alt="logo" />
        </Link>
        <Link to={"/bikes"}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Bikes
          </button>
        </Link>
        <Link to={"/reservations"}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Bookings
          </button>
        </Link>
      </nav>
      </header>
    </>
  );
};

export default Nav;
