import { useDispatch, useSelector } from "react-redux"
import CartItems from "./CartItems"
import { clearCart } from "../utils/Redux Slices/CartSlice"

const Cart = ()=>{
    //here also you have to subscribe to the store as you want to show the added items here
    const List = useSelector((store)=> store.cart.items)


    const dispatch = useDispatch()
const handlerClear = ()=>{
    dispatch(clearCart())
}

    return (
        <div className="text-center h-screen">
            <h1 className="font-bold text-2xl my-8">Cart</h1>
            <div className="w-6/12 mx-auto">
            {List.map((list)=>{
                return (<CartItems item={list} key={list?.card?.info?.id }/>)
            })}
             { List.length === 0 && (<h1 className="text-center">The Cart is empty. Please add items before you check out </h1>) }
            <button className="bg-blue-500 text-white text-bold rounded-lg p-2 m-4"
            onClick={handlerClear}>Clear Cart</button>
            </div>
           
            
        </div>
    )
}

export default Cart