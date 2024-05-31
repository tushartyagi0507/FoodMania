import { useState } from "react";
import { LOGO_URL } from "../utils/const";
import {Link} from "react-router-dom";
import useonlineStatus from "../utils/useonlineStatus"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { useSelector } from "react-redux";
import Store from "../utils/Store";


const Header = () => {
  const onlineStatus = useonlineStatus();
  const [loginBtn,setloginBtn] = useState("LogIn")

  // using the selector login here, sunbscribing to the Redux store 

const handleLogin = ()=>{
  ()=>{
    if(loginBtn==="LogIn")setloginBtn("Logout")
    else setloginBtn("LogIn")
  }
}

const handlerLoad = ()=>{
  window.location.reload()
}

  const cartItems = useSelector((Store)=> Store.cart.items)
    return (
      <div className="flex justify-between items-center shadow-md">
        <div className="name_logo flex justify-center items-center">
          <img
            className="w-20 m-4 ml-32"
            src={LOGO_URL}
          />
        <h3 className="font-bold text-3xl text-red-600 font-serif cursor-pointer" onClick={handlerLoad}>FoodMania</h3>
        </div>
        <div className="nav">
          <ul className="flex justify-center items-center text-lg font-bold">
            <li><Link to="/" className="mx-4 text-[#485563]">Home</Link></li>
            {/* <li><Link to="/Contact" className="mx-4 text-[#485563]">Contact Us</Link></li>  */}
            <li><Link to="/Help" className="mx-4 text-[#485563]">Help</Link></li> 
            <li><Link to="/Cart" className="mx-4 text-[#485563]"><FontAwesomeIcon icon={faCartShopping} /> 
            ({cartItems.length} Items )
            </Link></li>
            <li><Link to="/Login"><button className="mx-4 text-yellow-500" onClick={handleLogin}>{loginBtn}</button></Link></li>
            <li className="mx-4 mr-8 text-[#485563]">Active: { onlineStatus ? "✔" : "❌"}</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header 