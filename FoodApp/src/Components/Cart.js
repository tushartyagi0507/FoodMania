import { useDispatch, useSelector } from "react-redux"
import CartItems from "./CartItems"
import { clearCart } from "../utils/Redux Slices/CartSlice"
import { Navigate, useNavigate } from "react-router-dom"

const Cart = ()=>{
    //here also you have to subscribe to the store as you want to show the added items here
    const List = useSelector((store)=> store.cart.items)

const Navigate = useNavigate();
    const dispatch = useDispatch()
const handlerClear = ()=>{
    dispatch(clearCart())
}

const handlerHome = ()=>{
    Navigate("/")
}

    return (
        <div className="text-center h-auto">
            <div className="w-6/12 mx-auto">
            {List.map((list)=>{
                return (<CartItems item={list} key={list?.card?.info?.id }/>)
            })}
             { List.length === 0 && 
             (<>
               <h1 className="mt-6 text-2xl text-bold">The cart is empty</h1>
                <div> 
                    <img src="https://food-bazaar-ten.vercel.app/cart.ce1fb0f8.svg"
                    className="w-60 mx-auto my-6"/>
                </div>
             <h1 className="text-center">Please add items before you check out </h1>
             </>
             ) }
             { List.length ===0 ? 
            <button className="bg-blue-500 text-white text-bold rounded-lg p-2 m-4"
            onClick={handlerHome}>See restaurants to order</button> 
            : 
            <button className="bg-blue-500 text-white text-bold rounded-lg p-2 m-4"
            onClick={handlerClear}>Clear Cart</button>
            }
            </div>
           
            
        </div>
    )
}

export default Cart