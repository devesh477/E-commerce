import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const {cart}=useSelector((state)=>state);
  return (
    
    <div>
      <nav className="flex  justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="ml-5">
          <img src="https://imgs.search.brave.com/BqArAB-DXFArYi7B65ETOPCz5YNJlP674QXatU1wfBQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2UxLzQx/LzM5L2UxNDEzOWNl/ZWI4YWUzNTZiMDE1/ZGY1ZTAyMmU1OWNi/LS1sb2dvLWFuZC1p/ZGVudGl0eS1sb2dv/LWJyYW5kaW5nLmpw/Zw"
          width={80} height={80}/>
          </div>
        </NavLink>
        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
          <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div className="relative text-2xl">
            <FaShoppingCart/>
            {
              cart.length >0 && <span className="absolute -top-1 -right-2 bg-green-600 text-xs
              w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                {cart.length}</span>
            }
            </div>
          </NavLink>
        </div>
        
      </nav>
    </div>
  );
};

export default Navbar;
