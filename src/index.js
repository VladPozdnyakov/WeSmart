import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./pages/Products/Products";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import HomeV2 from "./pages/HomeV2/HomeV2";
import Careers from "./pages/Careers/Careers";
import Contacts from "./pages/Contacts/Contacts";
import Product from "./pages/Product/Product";
import "./localization/i18n";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeV2 />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/careers",
    element: <Careers />,
  },
  {
    path: "product",
    element: <Product />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <div className="wassupButton">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M23.2201 19.1763C22.8239 18.9781 20.8761 18.0196 20.5129 17.8874C20.1497 17.7551 19.8855 17.6891 19.6214 18.0856C19.3573 18.4822 18.598 19.3747 18.3668 19.6392C18.1357 19.9035 17.9046 19.9367 17.5085 19.7384C17.1122 19.54 15.8355 19.1217 14.3222 17.7717C13.1443 16.7212 12.3492 15.4238 12.118 15.027C11.887 14.6304 12.0935 14.416 12.2918 14.2184C12.47 14.0409 12.688 13.7556 12.8861 13.5243C13.0842 13.293 13.1502 13.1276 13.2823 12.8634C13.4144 12.5989 13.3484 12.3675 13.2493 12.1692C13.1502 11.9709 12.3578 10.0206 12.0277 9.22722C11.7061 8.45481 11.3794 8.55943 11.1362 8.54712C10.9054 8.53564 10.6409 8.5332 10.3769 8.5332C10.1127 8.5332 9.68347 8.63235 9.32034 9.02893C8.95714 9.42567 7.93359 10.3842 7.93359 12.3344C7.93359 14.2846 9.35334 16.1685 9.55148 16.4329C9.74954 16.6975 12.3453 20.6993 16.3199 22.4156C17.2652 22.8238 18.0032 23.0676 18.5785 23.2501C19.5277 23.5518 20.3914 23.5092 21.0741 23.4072C21.8353 23.2935 23.4182 22.4487 23.7484 21.5233C24.0785 20.5977 24.0785 19.8044 23.9795 19.6392C23.8805 19.4739 23.6164 19.3747 23.2201 19.1763ZM15.9885 29.0466H15.9831C13.6182 29.0457 11.2986 28.4104 9.27505 27.2096L8.79384 26.9239L3.8056 28.2324L5.137 23.369L4.82367 22.8703C3.50436 20.7719 2.80761 18.3467 2.80859 15.8564C2.81148 8.58968 8.72389 2.67773 15.9937 2.67773C19.514 2.67895 22.8231 4.05171 25.3115 6.5429C27.7998 9.03402 29.1694 12.3454 29.1681 15.8669C29.1651 23.1342 23.2527 29.0466 15.9885 29.0466ZM27.2069 4.65027C24.2132 1.65301 20.2318 0.00167271 15.9899 0C7.24981 0 0.136402 7.11288 0.132904 15.8557C0.131764 18.6504 0.8619 21.3783 2.24956 23.7831L0 32L8.40595 29.7949C10.722 31.0582 13.3297 31.7241 15.9836 31.725H15.9901H15.9902C24.7294 31.725 31.8434 24.6114 31.8469 15.8684C31.8485 11.6315 30.2007 7.64746 27.2069 4.65027Z"
          fill="white"
        />
      </svg>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
