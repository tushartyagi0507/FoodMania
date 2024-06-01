import { removeItem } from "../utils/Redux Slices/CartSlice";
import { CDN_URL } from "../utils/const";
import { useDispatch } from "react-redux";

const ItemList = (props) => {
  // console.log("props for list items", props);
  const { name, defaultPrice, description, price, imageId } =
    props?.item?.card?.info;
  const {item} = props;

    const dispatch = useDispatch();

    const handlerRemove = (item)=>{
      // console.log(item?.card?.info?.id)
      dispatch(removeItem(item?.card?.info?.id))
    }
  return (
    <div className="mb-6 border-b-2 border-gray-300 pb-4 text-left my-6">
      <div className="flex justify-between">
        <div className="flex-col w-9/12 pl-2">
          <div className="font-bold text-md">{name}</div>
          <div className="font-bold">₹{defaultPrice / 100 || price / 100}</div>
          <p className="tex-color-gray-300 mt-2">{description}</p>
        </div>
        <div>
          <button
            className="absolute rounded-lg text-green-600 bg-white px-4 py-1 mt-24 ml-8
       font-bold shadow-lg hover:bg-gray-400 hover:text-white"
       onClick={()=>handlerRemove(item)}
          >
            Remove
          </button>
          <img
            src={CDN_URL + imageId}
            className="bg-cover w-[156px] h-[144px] p-4 mr-2"
          />
        </div>
      </div>

      {/* {console.log( CDN_URL+imageId)} */}
    </div>
  );
};

export default ItemList;
