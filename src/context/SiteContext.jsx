import React, { createContext } from "react";

export const SiteDataContext = createContext();
const SiteContext = ({ children }) => {
  const featuresData = [
    {
      title: "Fast Performance",
      description: "Optimised for speed and performace",
    },
    {
      title: "Responsive Design",
      description: "Mobile-first layout for all devices",
    },
    { title: "Easy Customisation", description: "Style with utilities only" },
  ];
  const planData = [
    { plan: "Basic", price: "$10", featueres: ["1 Project", "Basic Support"] },
    {
      plan: "Pro",
      price: "$49",
      featueres: ["10 Projects", "Priority Support"],
    },
    {
      plan: "Enterprise",
      price: "$99",
      featueres: ["Unlimited Projects", "24/7 Support"],
    },
  ];
  return (
    <SiteDataContext.Provider value={{ planData, featuresData }}>
      {children}
    </SiteDataContext.Provider>
  );
};

export default SiteContext;
