import { CDN_URL } from "../utils/const.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar } from '@fortawesome/free-solid-svg-icons';


const RestoCard = (props) => {
  // {console.log(props)}
  const { resdata } = props;
  const { name, cloudinaryImageId, cuisines, avgRating,totalRatingsString } = resdata?.info;

return (
    <div className="w-[250px] h-[270px] shadow-lg overflow-visible hover:border-2 border-solid border-transparent
    hover:shadow-md rounded-lg px-2">
        <img
          alt="dish_logo"
          className="w-[250px] h-[170px] rounded-lg bg-cover overflow-hidden pt-2"
          src={CDN_URL + cloudinaryImageId}
        />
  
      <div className="">
        <h3 className=" font-bold font-sans tuncate w-[250px]">{name}</h3>
        <FontAwesomeIcon icon={faStar}/>
        <span className="font-bold font-sans ml-2">{avgRating}</span> <span>{"("+totalRatingsString+")"}</span> {"▪"} {" "}
        <span className="font-bold font-sans">{resdata.info.sla.deliveryTime} minutes</span>
        <h4 className="truncate">{cuisines.join(", ")}</h4>
      </div>
    </div>
  );
};

export const WithVeg = (RestoCard)=>{
  return (props)=>{
    return(
      <>
      <label className="absolute bg-green-800 text-white rounded-lg m-1 p-1">Veg</label>
      <RestoCard {...props}/>
      </>
    )
    }
}

export default RestoCard;
