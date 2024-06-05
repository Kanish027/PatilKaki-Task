import React from "react";

const Header = () => {
  return (
    <div className="flex items-center text-white justify-between mx-10 py-3">
      <div className="text-4xl flex items-center gap-3">
        <img
          src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0d2fab2e360025df922a_when%20to%20orderr.svg"
          alt=""
          className="w-10 h-8"
        />
        <div className="text-3xl">CleverBooks</div>
      </div>
      <div>
        <ul className="flex gap-10 list">
          <li>Product</li>
          <li>Price</li>
          <li>Industry</li>
          <li>Customer Stories</li>
          <li>About</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="flex items-center gap-8">
        <div className="login_button">Login</div>
        <div>
          <button className="nav_button px-6 rounded-full hover:text-black text-white py-3">
            Talk to Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
