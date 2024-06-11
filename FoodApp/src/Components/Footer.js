// import { LOGO_URL } from "../utils/const"

// const Footer = ()=>{

//     return <div className="w-12/12">
//    <div className="bg-black flex justify-evenly text-white py-6 mt-16 ">
//     <div>
//         <img src={LOGO_URL} className="w-32 my-2" alt="logo" />
//         <span className="my-2">All right reserved © 2024</span>
//         <p>Created by Tushar Tyagi with ♥️</p>
//     </div>

//     <div><ul>
//         <li className="font-bold text-lg pb-2">Compnay</li>
//         <li className="cursor-pointer">About</li>
//         <li className="cursor-pointer">Careers</li>
//         <li className="cursor-pointer">Team</li>
//         </ul></div>

//     <div>
//     <ul>
//     <li className="font-bold text-lg pb-2">Contact Us</li>
//         <li className="cursor-pointer">Help and Support</li>
//         <li className="cursor-pointer">Partner with us</li>
//         <li className="cursor-pointer">Ride with us</li>
//         <li className="cursor-pointer">Privacy Policies</li>
//         </ul> 
//     </div>
//     <div>
//     <ul>
//     <li className="font-bold text-lg pb-2">We deliver to:</li>
//         <li className="cursor-pointer">Bangalore</li>
//         <li className="cursor-pointer">Pune</li>
//         <li className="cursor-pointer">Noida</li>
//         <li className="cursor-pointer">Gurgaon</li>
//         <li className="cursor-pointer">Delhi</li>
//         <li className="cursor-pointer">Hyderabad</li>
//         </ul>
//     </div>

//    </div>
//     </div>
// }

// export default Footer

import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/const";

const Footer = () => {
  const LiCss =
    "font-normal lg:text-base md:text-base text-xs lg:pt-3 md:pt-3 pt-2 text-zinc-400 lg:tracking-wide tracking-wider md:tracking-wide  cursor-pointer";
  const titleCss =
    "font-extrabold lg:text-lg md:text-lg text-base text-gray-50 tracking-wide lg:pb-4 md:pb-4 pb-2";

  return (
    <div>
      <div className="flex mt-12 justify-center items-start lg:px-12  md:px-12 px-4 lg:flex-row md:flex-row flex-row bg-black lg:gap-10 md:gap-10 gap-16 lg:w-12/12 md:w-12/12 w-12/12 lg:py-16 md:py-16 py-10 pb-20 flex-wrap">
        <div className=" lg:w-3/12 w-4/12 md:w-3/12 ">
          <div className="flex justify-center items-center flex-col gap-2">
            <img className="lg:w-32 w-16 rounded-3xl md:w-28" src={LOGO_URL}></img>
            <span className="font-extrabold lg:text-lg md:text-lg text-base text-gray-50 tracking-wide">
              FoodMania
            </span>
            <div className="flex justify-evenly md:gap-4 gap-3 lg:gap-5 items-center flex-row">
              <Link
                target="_blank"
                to={"https://www.instagram.com/i_tushartyagi"}
              >
                <span className="text-white lg:text-2xl text-xl md:text-2xl">
                  <i className="ri-instagram-line"></i>
                </span>
              </Link>
              <Link target="_blank" to={"https://github.com/TusharTyag0507"}>
                <span className="text-white lg:text-2xl text-xl md:text-2xl">
                  <i className="ri-github-fill"></i>
                </span>
              </Link>
              <Link
                target="_blank"
                to={"https://www.linkedin.com/in/TusharTyag0507"}
              >
                <span className="text-white lg:text-2xl text-xl md:text-2xl">
                  <i className="ri-linkedin-box-fill"></i>
                </span>
              </Link>
              <Link target="_blank" to={"https://twitter.com/TusharTyag0507"}>
                <span className="text-white lg:text-2xl text-xl md:text-2xl">
                  <i className="ri-twitter-x-fill"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:w-2/12 w-4/12 md:w-2/12">
          <span className={titleCss}>Company</span>
          <ul>
            <li className={LiCss}>About</li>
            <li className={LiCss}>Careers</li>
            <li className={LiCss}>Team</li>
            <li className={LiCss}>Foody Instamart</li>
            <li className={LiCss}>Foody One</li>
          </ul>
        </div>
        <div className="lg:w-2/12 w-4/12 md:w-2/12">
          <span className={titleCss}>Contact Us</span>
          <ul>
            <li className={LiCss}>Help & Support</li>
            <li className={LiCss}>Partner with us</li>
            <li className={LiCss}>Ride with us</li>
            <li className={LiCss}>Privacy Policy</li>
            <li className={LiCss}>Cookies</li>
          </ul>
        </div>
        <div className="lg:w-2/12 w-4/12 md:w-2/12 ">
          <span className={titleCss}>We deliver to:</span>
          <ul>
            <li className={LiCss}>Bangalore</li>
            <li className={LiCss}>Pune</li>
            <li className={LiCss}>Gurgaon</li>
            <li className={LiCss}>Hyderabad</li>
            <li className={LiCss}>Delhi</li>
            <li className={LiCss}>Mumbai</li>
          </ul>
        </div>
      </div>
      <div className="bg-zinc-800 text-white text-center py-5">
        <span className="tracking-wide">
          © 2024 Created by Tushar Tyagi with ♥️
        </span>
      </div>
    </div>
  );
};
export default Footer;

