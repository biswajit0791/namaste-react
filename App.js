import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - Restaurant Container
 *      - Restaurant Card
 *          - Img
 *          - Name of Res, Rating, Cuisine, Delivery Time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contacts
 *
 */

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img
        className="logo"
        src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
      />
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);
const styleCard = {
  backgroundColor: "#f0f0f0",
};
const RestaurantCard = ({ resData }) => (
  <div className="res-card" style={styleCard}>
    <img
      className="res-logo"
      alt="res-logo"
      src={
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320/" +
        resData?.cloudinaryId
      }
    />
    <h3>{resData.resName}</h3>
    <h4>{resData.cuisine}</h4>
    <h4>{resData.avgRating} stars</h4>
    <h4>{resData.deliveryTime} mins</h4>
    <h4>{resData.costForTwo / 100} For Two</h4>
  </div>
);
const resList = [
  {
    resId: 1,
    resName: "KFC",
    cuisine: "Biriyani, Fast Food, Berger",
    avgRating: "4.4",
    deliveryTime: 38,
    costForTwo: 40000,
    cloudinaryId: "fftz4ycsc0g7gpz7x29z",
  },
  {
    resId: 2,
    resName: "Patiala House",
    cuisine: "North Indian",
    avgRating: "4.5",
    deliveryTime: 30,
    costForTwo: 30000,
    cloudinaryId: "fftz4ycsc0g7gpz7x29z",
  },
  {
    resId: 3,
    resName: "Biriyani Box",
    cuisine: "Biriyani, North Indian",
    avgRating: "3.4",
    deliveryTime: 25,
    costForTwo: 40000,
    cloudinaryId: "fftz4ycsc0g7gpz7x29z",
  },
  {
    resId: 4,
    resName: "Kareem",
    cuisine: "Biriyani, Fast Food",
    avgRating: "4.4",
    deliveryTime: 39,
    costForTwo: 50000,
    cloudinaryId: "fftz4ycsc0g7gpz7x29z",
  },
];

const Body = () => (
  <div className="body">
    <div className="search">Search</div>
    <div className="res-container">
      {resList.map((restaurant) => (
        <RestaurantCard key={restaurant?.resId} resData={restaurant} />
      ))}
    </div>
  </div>
);

const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
