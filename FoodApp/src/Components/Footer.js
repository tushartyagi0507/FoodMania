import { LOGO_URL } from "../utils/const"

const Footer = ()=>{

    return <div className="w-12/12">
   <div className="bg-black flex justify-evenly text-white py-6 mt-16 ">
    <div>
        <img src={LOGO_URL} className="w-32 my-2" alt="logo" />
        <span className="my-2">All right reserved © 2024</span>
        <p>Created by Tushar Tyagi with ♥️</p>
    </div>

    <div><ul>
        <li className="font-bold text-lg pb-2">Compnay</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Careers</li>
        <li className="cursor-pointer">Team</li>
        </ul></div>

    <div>
    <ul>
    <li className="font-bold text-lg pb-2">Contact Us</li>
        <li className="cursor-pointer">Help and Support</li>
        <li className="cursor-pointer">Partner with us</li>
        <li className="cursor-pointer">Ride with us</li>
        <li className="cursor-pointer">Privacy Policies</li>
        </ul> 
    </div>
    <div>
    <ul>
    <li className="font-bold text-lg pb-2">We deliver to:</li>
        <li className="cursor-pointer">Bangalore</li>
        <li className="cursor-pointer">Pune</li>
        <li className="cursor-pointer">Noida</li>
        <li className="cursor-pointer">Gurgaon</li>
        <li className="cursor-pointer">Delhi</li>
        <li className="cursor-pointer">Hyderabad</li>
        </ul>
    </div>

   </div>
    </div>
}

export default Footer