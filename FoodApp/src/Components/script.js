import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header.js"
import Body from "./Body.js"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./About.js";
import Contact from "./Contact.js";
import Error from "./Error.js";
import RestaurantMenu from "./RestaurantMenu.js";
import Cart from "./Cart.js";
import { Provider } from "react-redux";
import Store from "../utils/Store.js";
import Footer from "./Footer.js"

const root = ReactDOM.createRoot(document.querySelector(".root"));

const App = () => {
  return (
 <Provider store={Store}>
     <div className="app">
      <Header />
      <Outlet/>
      <Footer/>
    </div>
 </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Body/>, 
      },
      
      {
        path: "/About",
        element: <About/>, 
      },
      {
        path: "/Contact",
        element: <Contact/>,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu/>,
      },
      {
        path: "/Cart",
        element: <Cart/>
      },
    ],
    errorElement: <Error/>
  },

])

root.render(<RouterProvider router={appRouter} />);
