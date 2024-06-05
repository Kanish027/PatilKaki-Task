import React from "react";

const CTA = () => {
  return (
    <div className="h-screen flex align-middle items-center">
      <div className=" h-5/6 mx-10 rounded-3xl gradient-bg-anim flex flex-col justify-center items-center">
        <div className="text-white font-medium mb-14 text-5xl flex justify-center">
          You can grow faster than you think!
        </div>
        <div className="mb-10">
          <p className=" px-60 text-sm text-white text-center">
            Plan with Crest to fulfil your demand today, and dreams tomorrow. We
            bring the methods and technologies of large global companies to help
            brands of all sizes scale.
          </p>
        </div>
        <div className="bg-black text-white text-md font-medium py-3 px-5 rounded-full">
          Get started with Crest
        </div>
      </div>
    </div>
  );
};

export default CTA;
