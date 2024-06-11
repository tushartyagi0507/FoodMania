const ShimmerContainer = () => {
  const shimCard = "w-[250px] h-[270px] bg-gray-200 rounded-lg px-2";
  const shimmerButtons = "rounded-lg px-2 ml-2 bg-gray-100 h-6 w-24 md:h-8 ";
  const shimmerTop = "w-20 h-20 rounded-full bg-gray-200 sm:h-32 sm:w-32";
  return (
    <div className="shimmer">
      <div className="flex flex-col justify-between min-[500px]:flex min-[500px]:flex-row text-center">
        <div className="my-[1.5%] px-24 flex">
          <div className={shimmerButtons}></div>
          <div className={shimmerButtons}></div>
        </div>
        <div className="flex my-[1.5%] pr-[6%]">
          <div className="rounded-lg w-80 h-8 bg-gray-100"></div>
          <button className="w-24 h-8 bg-gray-100 rounded-lg px-2 ml-2"></button>
        </div>
      </div>
      <div className="ml-[12%] my-[1.5%]">
        <div
          className=" bg-gray-100 my-[1.5%]
      sm:h-8 sm:w-44
      md:h-10 md:w-60
      lg:h-12 lg;w-80 "
        ></div>
        <div
          className="flex gap-4 sm:gap-8  md:gap-12">
          <div className={shimmerTop}></div>
          <div className={shimmerTop}></div>
          <div className={shimmerTop}></div>
          <div className="w-20 h-20 hidden rounded-full bg-gray-200 sm:h-32 sm:block sm:w-32"></div>
          <div className="w-20 h-20 hidden rounded-full bg-gray-200 sm:h-32 sm:w-32 md:block"></div>
          <div className="w-20 h-20 hidden rounded-full bg-gray-200 sm:h-32 sm:w-32 md:block"></div>
        </div>
      </div>
      <div className=" bg-gray-100 my-[1.5%] ml-[12%]
      sm:h-8 sm:w-36
      md:h-10 md:w-48
      lg:h-12 lg;w-60"></div>
      <div
        className="flex flex-wrap gap-4 w-[255px] mx-auto
      sm:w-[518px] 
      min-[854px]:w-[784px]
      min-[1390px]:w-[1050px]
      "
      >
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
  );
};
export default ShimmerContainer;
