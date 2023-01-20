import React from "react";

type Props = {};

const TopCards = (props: Props) => {
  return (
    <div className="grid lg:grid-cols-5 p-4 gap-4">
      <div className="col-span-1 lg:col-span-2 bg-white flex justify-between w-full border p-4 rounded-lg shadow-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">7,486</p>
          <p className="text-gray-500">Daily Revenue</p>
        </div>
        <p className="bg-green-300 p-3 flex justify-center items-center rounded-lg">
          <span className=" text-green-700 text-lg">+18%</span>
        </p>
      </div>
      <div className="col-span-1 lg:col-span-2 bg-white flex justify-between w-full border p-4 rounded-lg shadow-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">199,346,12</p>
          <p className="text-gray-500">YTD Revenue</p>
        </div>
        <p className="bg-green-300 p-3 flex justify-center items-center rounded-lg">
          <span className="text-green-700 text-lg">19%</span>
        </p>
      </div>
      <div className="bg-white flex justify-between w-full p-4 rounded-lg shadow-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">19,999</p>
          <p className="text-gray-500">Customers</p>
        </div>
        <p className="bg-green-300 p-3 flex justify-center items-center rounded-lg">
          <span className="text-green-700 text-lg">38%</span>
        </p>
      </div>
    </div>
  );
};

export default TopCards;
