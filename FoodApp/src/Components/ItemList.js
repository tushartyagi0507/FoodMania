import { addItem } from "../utils/Redux Slices/CartSlice";
import { CDN_URL } from "../utils/const";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemList = (props) => {

  // console.log("props for list items", props);
  const { name, defaultPrice, description, price, imageId } =
    props?.item?.card?.info;
  const {item} = props;

    const dispatch = useDispatch();

    const handlerAdd = (item)=>{
      // console.log(item)
      dispatch(addItem(item))
      // setpopup(true)
      toast("Item added to the cart !");
    }
  return (
    <>
    <div className="my-6 border-b-2 border-gray-300 pb-4 ">
      <div className="flex justify-between">
        <div className="flex-col w-9/12 pl-2">
          <div className="font-lg text-sm sm:text-md sm:font-bold">{name}</div>
          <div className="font-lg sm:font-bold">₹{defaultPrice / 100 || price / 100}</div>
          <p className="tex-color-gray-300 mt-2">{description}</p>
        </div>
        <div>
          <button
            className="absolute rounded-lg text-green-600 bg-white px-2 py-1 mt-[16%] ml-[2.5%]
       font-bold shadow-lg hover:bg-gray-400 hover:text-white
       min-[500px]:mt-[10%]
       md:px-4 
       md:mt-24 md:ml-10
       "
       onClick={()=>handlerAdd(item)}
          >
            Add +
          </button>
          <img
            src={CDN_URL + imageId}
            className="bg-cover w-[120px] h-[100px] p-2 mr-2 md:w-[156px] md:h-[144px]"
          />
        </div>
      </div>
      
      {/* {console.log( CDN_URL+imageId)} */}
    </div>
    <ToastContainer />
    </>
  );
};

export default ItemList;
