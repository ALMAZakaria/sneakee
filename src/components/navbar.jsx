import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-51 grid grid-cols-3 gap-4 bg-black border-b border-gray-700">
      <div className="flex justify-start items-centerpl -8">
          <img  src={"https://screendy-cdn.fra1.cdn.digitaloceanspaces.com/platfrom-v2/_files/file_1750430583519_WhiteWolfLogo.png"}
           alt="logo" 
           className="w-16 h-16" 
           />
      </div>
      <div className="flex justify-center items-center "> 
        <ul className="flex gap-4">
          <li className="text-white text-md">
          <Link  to="/">Home</Link>
          </li>
          <li className="text-white text-md">
          <Link  to="/">Contact</Link>
          </li>
          <li className="text-white text-md">
          <Link  to="/">Products</Link>
          </li>
        </ul>
      </div>

      <div className="flex justify-end items-center pr-12"> 
        <ul className="flex gap-4">
          <li className="text-white text-md">
          <Link to="/login" >Login</Link> 
          </li>
          <li className="text-white text-md">
          <Link to="/register">Register</Link>
          </li>
          <li className="text-white text-md">
          <Link  to="/card">Card</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export  default Navbar; //It looks like you're trying to create a simple navigation bar component using React and Tailwind CSS. Here's a refined version of your `Navbar` component:Navbar;