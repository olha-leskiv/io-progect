import React from "react";
import { FaLayerGroup, FaUserCheck , FaChartBar } from "react-icons/fa";

const featuresData = [
  {
    icon: <FaLayerGroup className="text-8xl text-violet-600 mb-4" />,
    title: "Organize your campaigns",
    description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
  },
  {
    icon: <FaUserCheck  className="text-8xl text-violet-600 mb-4" />,
    title: "Manage customers",
    description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
  },
  {
    icon: <FaChartBar className="text-8xl text-violet-600 " />,
    title: "Track progress fast",
    description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
  },
];


const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-50 rounded-lg">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex flex-col md:flex-row justify-between gap-8 ">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="flex flex-row items-start  p-6    justify-start gap-8"
            >
              {feature.icon}
              <div className="flex flex-col  justify-start">
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-lg ">{feature.description}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
