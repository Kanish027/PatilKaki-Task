import React from "react";

const Hero = () => {
  return (
    <div className="overflow-hidden">
      <section className="hero-home-section text-white padding-top-bottom-120">
        <div className="flex gap-32 pt-36">
          <div className="ps-10 flex-1">
            <h1 className="text-banner mb-6">
              Every order <br /> fulfilled,
              <span className="text-style-gradient px-3"> on time.</span>
            </h1>
            <p className="mb-12 banner-description">
              Eliminate overstocking and under-stocking with Crest. Built by
              supply-chain experts, it brings the same technology used by large
              global brands to power fast-growing startups. In short, we make
              supply meet demand, and then help you grow both.
            </p>
            <button className="border-2 banner-btn px-5 py-2 rounded-full">
              <span className="text-style-gradient">
                Get started with Crest
              </span>
            </button>
          </div>
          <div className="flex-1">
            <div>
              <img
                src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d648dea3f01_Hero%20Image.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
