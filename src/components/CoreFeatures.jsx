import React, { useContext } from "react";
import { SiteDataContext } from "../context/SiteContext";

const CoreFeatures = () => {
  const { featuresData } = useContext(SiteDataContext);
  return (
    <section id="coreFeatures" className="py-12 px-6 bg-gray-800">
      <h1 className="text-3xl font-semibold text-center mb-10">
        Core Features
      </h1>

      <div className="grid grid-cols-12 gap-6">
        {featuresData.map(({ title, description }, i) => {
          return (
            <div
              key={i}
              className="col-span-12 md:col-span-6 lg:col-span-4  space-y-2  text-center bg-gray-700 p-6 rounded shadow"
            >
              <h3 className="font-bold text-lg">{title}</h3>
              <p className="text-sm text-gray-300">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CoreFeatures;
