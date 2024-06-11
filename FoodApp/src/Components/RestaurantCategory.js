import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import ItemList from "./ItemList"
import { useState } from "react"

const RestaurantCategory = (props)=>{
    // console.log("props:", props) // checking the props which we took 

// desturcturing of the props 
const {isShow, setshowIndex} = props;
const {title,itemCards} = props?.Data?.card?.card
// console.log(itemCards)

// This code we need when we are giving the power of controlling their state of showing accodian
// to each item itself, each item will have its own state makes a "uncontrolled component"
// but we want the parent to have control over its children so only one accodian item gets open 
// and others should collapse 

// const [isShow, setisShow] = useState(false)

const showhnadler = ()=>{
setshowIndex();
// isShow ? setisShow(false) : setisShow(true)
}

  return ( 
    <div className="w-6/12 mt-4 mx-auto p-2">
        <div className="border-b-2 border-gray-300 mb-2 shadow-md">
         <div className="flex justify-between cursor-pointer" onClick={showhnadler}>
         <h2 className="text-md font-lg mb-4 text-sm pl-2 sm:font-bold sm:text-md md:font-black md:text-lg">{title} ({itemCards.length})</h2>
        <span> <FontAwesomeIcon icon={faAngleDown} className="pr-2"/></span>
         </div>
         { isShow && itemCards.map((Item)=>{
            return <ItemList item={Item} key={Item?.card?.info?.id }/>
         }) }
        </div>
    </div> 
  )
}

export default RestaurantCategory; 