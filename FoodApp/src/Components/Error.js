
import App from "./script.js";
import { useRouteError } from "react-router-dom";

const Error = ()=>{
  const err = useRouteError();
  // console.log(err);
    return (
<div className="w-12/12 h-screen flex bg-slate-100 ">
<div className="my-auto w-6/12 mx-auto flex p-2">
        <img className="h-80 "
        src="https://b.zmtcdn.com/images/z404x2.png?output-format=webp"/>
      <div className="pl-8">
      <p className="mt-8">
        This is a <b>{err.status}: {err.statusText} </b> and we think it's fairly clear
You aren't going to find what you're looking for here
But we know you're hungry, so don't fret or rage
Hit that big red button to go back to our homepage
        </p>
        <button className="bg-red-600 text-white font-bold rounded-lg p-2 mt-8 ml-24"
        onClick={()=>{
            console.log("clicked")
            window.location.href = "/";
        }}
        >Go Back</button>
      </div>
</div>
</div>
    )
}

export default Error