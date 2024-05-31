import RestoCard, { WithVeg } from "./RestoCard.js";
import { useEffect, useState } from "react";
import ShimmerContainer from "./ShimmerContainer.js";
import { Link, useAsyncError } from "react-router-dom";
import useonlineStatus from "../utils/useonlineStatus.js";
import TopCarousal from "./TopCarousal.js";

const Body = () => {
  const onlineStatus = useonlineStatus();
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [topCarousal, settopCarousal] = useState(null)
  // this is destructruing of the array which is returned by useState(),
  // console.log(listofRestaurants);

  const [searchtext, setsearchtext] = useState([]);

  const VegRestuarant = WithVeg(RestoCard);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      let data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const jsonData = await data.json();
      console.log(jsonData);
      // console.log(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setlistofRestaurants(
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setfilteredRestaurants(
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      settopCarousal(jsonData.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)
      console.log(jsonData.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)
    } catch {
      console.log("Could not fetch the data from the API");
    }
  };
  if (!onlineStatus)
    return (
      <div className="offline">
        <h1>
          Looks like you are offline! please check your internet connection
        </h1>
      </div>
    );
  return listofRestaurants.length === 0 ? (
    <ShimmerContainer />
  ) : (
    <div className="body">
      <div className="flex justify-between my-6 px-24 ">
        <div className="flex gap-4">
          <button
            className="text-neutral-400 border-solid border-2 border-slate-300 shadow-md px-2 rounded-md
            font-bold text-sm h-8"
            onClick={() => {
              let filteredList = listofRestaurants.filter((res) => {
                return res.info.avgRating >= 4.0;
              });
              setfilteredRestaurants(filteredList);
            }}
          >
            Ratings 4.0+
          </button>
          <button
            className="text-neutral-400 border-solid border-2 border-slate-300 shadow-md px-2 rounded-md text-sm
            font-bold h-8"
            onClick={() => {
              let vegList = listofRestaurants.filter((res) => {
                console.log(res?.info.veg);
                return res?.info?.veg;
              });
              setfilteredRestaurants(vegList);
            }}
          >
            Pure Veg
          </button>
        </div>
        <div className="mr-10">
          <input
            type="text"
            className="border-2 border-solid border-rgb(156,156,156) w-80 pl-2 
            shadow-md h-8 bg-gray-50 rounded-md font-bold"
            placeholder="Search for restaurant and food"
            value={searchtext}
            onChange={(e) => {
              setsearchtext(e.target.value);
            }}
          />
          <button
            className="ml-2 border-2 border-solid border-rgb(156,156,156) px-2 
            shadow-md h-8 bg-gray-50 rounded-md font-bold"
            onClick={() => {
              console.log(searchtext);
              let searchedList = listofRestaurants.filter((res) => {
                return res?.info.name
                  .toLowerCase()
                  .includes(searchtext.toLowerCase());
              });
              console.log(searchedList);
              setfilteredRestaurants(searchedList);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <h1 className="text-3xl font-bold my-6 ml-44">What's on your mind?</h1>
      <div className="flex overflow-x-scroll no-scrollbar [&::-webkit-scrollbar]:hidden mx-auto w-9/12
      border-b-4 border-gray-100">
      {topCarousal.map((item) => <TopCarousal image={item.imageId} title={item?.action?.text} key={item?.action?.text}/>)}
       
      </div>
      
      <h1 className="my-6 ml-44 font-bold text-3xl">Top Resaturants in Bangalore</h1>
      <div className="flex flex-wrap gap-6 w-9/12 mx-auto ">
        
        {filteredRestaurants.map((res) => {
          return (
        
            <Link
              key={res?.info?.id}
              to={"/restaurant/" + res?.info?.id}
              className="link"
            >
              {res?.info?.veg ? (
                <VegRestuarant resdata={res} />
              ) : (
                <RestoCard resdata={res} />
              )}
            </Link>
          );
          // return <RestoCard key={res?.info?.id} resdata={res} />
        })}
      </div>
    </div>
  );
};

export default Body;
