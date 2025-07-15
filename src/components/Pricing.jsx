import React, { useContext } from "react";
import { SiteDataContext } from "../context/SiteContext";

const Pricing = () => {
  const { planData } = useContext(SiteDataContext);
  return (
    <section id="pricing" className="py-12 px-6 bg-gray-900">
      <h1 className="text-3xl font-semibold text-center mb-10">
        Pricing Plans
      </h1>
      <div className="grid md:grid-cols-3 gap-6">
        {planData.map(({ plan, price, featueres }, i) => {
          return (
            <div
              key={i}
              className="bg-gray-800 p-6 rounded-lg shadow-md text-center space-y-4"
            >
              <h3 className="font-bold text-xl text-white">{plan}</h3>
              <p className="text-2xl text-blue-400">{price}/mo</p>
              <ul className="text-sm text-gray-300 space-y-2">
                {featueres.map((feature, i) => {
                  return <li key={i}>💎{feature}</li>;
                })}
              </ul>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4">
                Choose Plan
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
