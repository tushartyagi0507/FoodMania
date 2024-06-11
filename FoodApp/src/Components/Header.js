import { useState } from "react";
import { LOGO_URL } from "../utils/const";
import { Link, useNavigate } from "react-router-dom";
import useonlineStatus from "../utils/useonlineStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBars, faXmark  } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import Store from "../utils/Store";

const Header = () => {
  const onlineStatus = useonlineStatus();
  const [loginBtn, setloginBtn] = useState("LogIn");
  const [showMenu, setshowMenu ] = useState(false)
  const navigate = useNavigate()

  // using the selector login here, sunbscribing to the Redux store

const handleMenu = ()=>{
  setshowMenu(prevState => !prevState)
}

  const handleLogin = () => {
    () => {
      if (loginBtn === "LogIn") setloginBtn("Logout");
      else setloginBtn("LogIn");
    };
  };

  const handlerLoad = () => {
    navigate("/");
  };

  const cartItems = useSelector((Store) => Store.cart.items);
  return (
    <div className="flex justify-between items-center shadow-md w-screen">
     <div className="flex items-center">
     <div className="flex items-center">
      <img className="w-12 m-[1px] ml-2
        md:w-16 md:m-2 md:12
        lg:w-20 lg:m-4 lg:ml-24
        " src={LOGO_URL} />
        <h3
          className="font-bold text-sm text-red-600 font-serif cursor-pointer
          md:text-xl
          lg:text-3xl"
          onClick={handlerLoad}
        >
          FoodMania
        </h3>
      </div>
        <button className=" min-[477px]:hidden fixed right-6"
        onClick={handleMenu}>
      <FontAwesomeIcon icon={faBars} />
      </button>
     </div>
      <div className="hidden min-[477px]:block min-[477px]:mr-4 md:mr-8">
        <ul className="flex justify-center items-center text-sm font-bold
        md:text-md
        lg:text-lg">
          <li>
            <Link to="/" className="mx-4 text-[#485563]">
              Home
            </Link>
          </li>
          {/* <li><Link to="/Contact" className="mx-4 text-[#485563]">Contact Us</Link></li>  */}
          <li>
            <Link to="/Help" className="mx-4 text-[#485563]">
              Help
            </Link>
          </li>
          <li>
            <Link to="/Cart" className="mx-4 text-[#485563]">
              <FontAwesomeIcon icon={faCartShopping} />({cartItems.length} Items
              )
            </Link>
          </li>
          <li>
            <Link to="/Login">
              <button className="mx-4 text-yellow-500" onClick={handleLogin}>
                {loginBtn}
              </button>
            </Link>
          </li>
          <li className="md:hidden hidden mx-4 mr-8 text-[#485563] lg:block">
            Active: {onlineStatus ? "✔" : "❌"}
          </li>
        </ul>
      </div>

    {showMenu && 
  <>
    <div className="inset-0 fixed bg-cyan-100">
    <button className="m-2"
       onClick={handleMenu}>
        {showMenu ? <FontAwesomeIcon icon={faXmark} /> :   <FontAwesomeIcon icon={faBars} />}
   
     </button>
        <ul className="mt-6 flex flex-col gap-8 justify-center text-center text-lg font-bold">
          <li>
            <Link to="/" className=" text-[#485563]">
              Home
            </Link>
          </li>
          {/* <li><Link to="/Contact" className="mx-4 text-[#485563]">Contact Us</Link></li>  */}
          <li>
            <Link to="/Help" className=" text-[#485563]">
              Help
            </Link>
          </li>
          <li>
            <Link to="/Cart" className="mx-4 text-[#485563]">
              <FontAwesomeIcon icon={faCartShopping} />({cartItems.length} Items
              )
            </Link>
          </li>
          <li>
            <Link to="/Login">
              <button className=" text-yellow-500" onClick={handleLogin}>
                {loginBtn}
              </button>
            </Link>
          </li>
          <li className="md:hidden mr-8 text-[#485563] lg:block">
            Active: {onlineStatus ? "✔" : "❌"}
          </li>
        </ul>
      </div>
      </>}
    </div>

  );
};

export default Header;
