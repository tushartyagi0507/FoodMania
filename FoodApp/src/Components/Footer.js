const Footer = ()=>{

    return <div className="w-12/12 bottom-0">
   <div className="bg-black flex justify-evenly text-white py-6 mt-4 ">
    <div></div>

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
   <div className="bg-[rgba(2,6,12,.75)] text-center py-4 font-black"> 
   © 2024 All Rights Reserved. Made by Tushar Tyagi with 🤎
   </div>
    </div>
}

export default Footer