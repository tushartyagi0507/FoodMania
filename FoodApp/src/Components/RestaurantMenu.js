import useRestaurantMenu from "../utils/useRestaurantMenu";
import ShimmerContainer from "./ShimmerContainer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import {faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import MenuShimmer from "./MenuShimmer";

const RestaurantMenu = ()=> { 
const {resId} = useParams();

const [showIndex, setshowIndex] = useState(null)

  let resInfo = useRestaurantMenu(resId);
  // console.log(resInfo?.cards[2]?.card?.card?.info)
  if (resInfo === null) return <MenuShimmer/>;
  else {
    const { name, cloudinaryImageId, costForTwoMessage, cuisines,avgRatingString, totalRatingsString} =
      resInfo?.cards[2]?.card?.card?.info;
    const { itemCards } =
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card;
      // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

     const categories =  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c)=>{return (c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")} 
     )
  // filtering out only those restaurants which are of itme category 
  // console.log("Categories:",categories)

    return (
      <div className="border-1 border-gray-100 "> 
        <h1 className="text-3xl font-bold text-center mt-6">{name}</h1>
        <div className="flex justify-center mt-4">
        <FontAwesomeIcon icon={faStar} className="mt-[2px] mx-2"/>
        <span className="font-bold text-md">{avgRatingString} ({totalRatingsString})</span>- ₹
        <span className="font-bold text-md">{costForTwoMessage}</span>
        </div>
        <div className="font-bold text-center text-yellow-600 block mt-2">{cuisines.join(", ")}</div> 
       <div>
       {categories.map((category,Index)=>{
         return <RestaurantCategory Data={category} key={category?.card?.card?.title}
         isShow = {Index === showIndex ? true : false}
         setshowIndex = {()=> setshowIndex(Index)}
         />
        })}
       </div>
      </div>
    );
  } 
} 

export default RestaurantMenu;
