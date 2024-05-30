import { CDN_URL } from "../utils/const"

const CartItems = (props)=>{
    console.log(props)
    const {name,defaultPrice, price, description,imageId} = props?.item?.card?.info
    const {rating, ratingCount} = props?.item?.card?.info?.ratings?.aggregatedRating

    return   <div className="mb-6 border-b-2 border-gray-300 pb-4 ">
    <div className="flex justify-between">
      <div className="flex-col w-9/12">
        <div className="font-bold text-md text-left">{name}</div>
        <div className="font-bold text-left">₹{defaultPrice / 100 || price / 100}</div>
        <p className="tex-color-gray-300 mt-2">{description}</p>
      </div>
      <div><img
          src={CDN_URL + imageId}
          className="bg-cover w-[156px] h-[144px]  mr-2"
        />
      </div>
    </div>

    {/* {console.log( CDN_URL+imageId)} */}
  </div>
}

export default CartItems;