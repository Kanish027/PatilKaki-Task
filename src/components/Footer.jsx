import React from "react";

const Footer = () => {
  return (
    <div className=" py-32 px-10 text-white">
      <div className="flex mb-14 gap-20 justify-between">
        <div className="max-w-lg">
          <div className="mb-10 font-medium text-5xl">Crest</div>
          <p className="footer-text">
            Crest is an AI-powered supply chain software that provides companies
            tools for demand forecasting, inventory planning and more. This
            helps them have the right amount of stock, optimise space and fulfil
            every order.
          </p>
        </div>
        <div>
          <ul className="flex gap-y-4 flex-col">
            <li className="text-md text-white">Explore</li>
            <li className="text-sm font-medium">Product</li>
            <li className="text-sm font-medium">Price</li>
            <li className="text-sm font-medium">Customer Stories</li>
            <li className="text-sm font-medium">Career</li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-y-4 flex-col">
            <li className="text-md text-white">Learn</li>
            <li className="text-sm font-medium">About us</li>
            <li className="text-sm font-medium">Blog</li>
          </ul>
        </div>
        <div className="max-w-xs">
          <ul className="flex gap-y-4 flex-col">
            <li className="text-md text-white">Contact Crest</li>
            <li className="text-sm font-medium">sales@getcrest.ai</li>
            <li className="text-sm font-medium" style={{ lineHeight: "25px" }}>
              Registered Office: <br />
              1507, Incubex, 11th cross road, 19th <br /> Main Road, Bengaluru,
              India. <br /> 560102
            </li>
            <li className="text-sm font-medium" style={{ lineHeight: "25px" }}>
              Corporate Office: <br />
              291, All Time Space, 4th Floor, <br /> 15th A Cross, Sector - 6,
              HSR Layout, Bengaluru, <br /> India. 560102
            </li>
            <li>
              <ul className="flex gap-7">
                <li>
                  <a href="">
                    <i className="fa-brands text-2xl hover:text-white fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa-brands text-2xl hover:text-white fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa-brands text-2xl hover:text-white fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa-brands text-2xl hover:text-white fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="text-sm">
          <ul className="flex gap-6 mb-3">
            <li>Copyright 2024 Crest</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
          <ul>
            <li>Conifer Innovations Private Limited</li>
            <li>CIN: U72900KA2022PTC163144</li>
          </ul>
        </div>
        <div className="me-10">
          <div className="p-2 border border-white px-4 rounded-full">
            <i className="fa-solid text-lg fa-arrow-up-long"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
