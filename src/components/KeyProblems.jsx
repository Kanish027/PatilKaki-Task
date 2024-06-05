import React from "react";

const KeyProblems = () => {
  return (
    <div className="my-32">
      <div
        style={{ fontSize: "34.5714px" }}
        className="text-center mb-20 font-bold"
      >
        Four key questions answered by Crest
      </div>
      <div className="flex gap-5 px-10 justify-around mt-10">
        <div className="bg-purple-100 p-6 rounded-2xl w-1/4">
          <img
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f63ee54595853ca5e31682_what%20to%20orderr%20(1).svg"
            alt="What to order"
            className="mb-6"
            style={{ width: "56px", height: "56px" }}
          />
          <h3 className="font-medium text-xl mb-4">What to order</h3>
          <p className="mb-3" style={{ lineHeight: "25px", fontSize: "14px" }}>
            Get accurate demand and days to stock out. Automate purchase
            planning so you can always have what you need for your next sales
            cycle.
          </p>
        </div>
        <div className="bg-purple-100 p-6 rounded-2xl w-1/4">
          <img
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0d2fab2e360025df922a_when%20to%20orderr.svg"
            className="mb-6"
            style={{ width: "56px", height: "56px" }}
          />
          <h3 className="font-medium text-xl mb-4">When to order</h3>
          <p className="mb-3" style={{ lineHeight: "25px", fontSize: "14px" }}>
            Have up-to-date inventory, storage, sales velocity, and demand. Get
            timely order suggestions so you're never left guessing.
          </p>
        </div>
        <div className="bg-purple-100 p-6 rounded-2xl w-1/4">
          <img
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0cc629ab7f2d8cb0a8bd_how%20much%20to%20stock.svg"
            alt="What to order"
            className="mb-6"
            style={{ width: "56px", height: "56px" }}
          />
          <h3 className="font-medium text-xl mb-4">How much to stock</h3>
          <p className="mb-3" style={{ lineHeight: "25px", fontSize: "14px" }}>
            Get inventory requirements for every node, for every SKU. So you
            avoid out-of-stock situations, even during demand spikes.
          </p>
        </div>
        <div className="bg-purple-100 p-6 rounded-2xl w-1/4">
          <img
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0c2c27cde81ffea6515b_where%20to%20placee.svg"
            alt="What to order"
            className="mb-6"
            style={{ width: "56px", height: "56px" }}
          />
          <h3 className="font-medium text-xl mb-4">Where to place</h3>
          <p className="mb-3" style={{ lineHeight: "25px", fontSize: "14px" }}>
            Our tool suggests how to move stock within your supply chain. So
            you'll always have products available across cities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KeyProblems;
