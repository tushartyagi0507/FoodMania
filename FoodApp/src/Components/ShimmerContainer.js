const ShimmerContainer = ()=>{
  const shimCard = "w-[250px] h-[270px] bg-gray-200 rounded-lg px-2"
  const shimmerButtons = "rounded-lg px-2 ml-2 bg-gray-100 h-8 w-24"
return (
    
     <div className="shimmer">
    <div className="flex justify-between">
    <div className="my-6 px-24 flex">
    <div className={shimmerButtons}></div>
    <div className={shimmerButtons}></div>
    </div>
      <div className="flex my-6 pr-24">
       <div className="rounded-lg w-80 h-8 bg-gray-100"></div>
       <button className="w-24 h-8 bg-gray-100 rounded-lg px-2 ml-2"></button>
      </div> 
    </div>
      <div className="flex flex-wrap gap-4 my-6 mx-auto w-9/12">
       <div className={shimCard}></div> 
       <div className={shimCard}></div>
       <div className={shimCard}></div>
       <div className={shimCard}></div>
       <div className={shimCard}></div>
       <div className={shimCard}> </div>
       <div className={shimCard}> </div>
       <div className={shimCard}> </div>
       <div className={shimCard}> </div>
        </div>
        </div>
)
}
export default ShimmerContainer