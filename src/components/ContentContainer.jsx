import React from "react";

const ContentContainer = ({ isp, location, timezone, ipAddress }) => {
  return (
    <div className="z-999 flex flex-col lg:flex-row justify-between lg:justify-center items-center text-center gap-y-6 lg:gap-x-12 bg-white p-6 w-full rounded-2xl shadow-lg max-w-7xl">
      {[
        { id: 1, name: "IP ADDRESS", content: ipAddress, isFirst: true },
        { id: 2, name: "LOCATION", content: location },
        { id: 3, name: "TIMEZONE", content: timezone },
        { id: 4, name: "ISP", content: isp },
      ].map((item) => (
        <div
          key={item.id}
          className={`flex flex-col text-center lg:text-left min-w-0 w-full gap-y-2 ${
            item.isFirst ? "" : "lg:border-l lg:border-gray-400 lg:pl-10"
          }`}
        >
          <p className="text-xs lg:text-lg font-bold text-gray-400 tracking-wide">
            {item.name}
          </p>
          <h2 className="text-xl lg:text-3xl font-semibold break-words">
            {item.content}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default ContentContainer;
