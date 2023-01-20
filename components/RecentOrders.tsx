import React from "react";
import { FaShoppingBag } from "react-icons/fa";

import { data } from "../data/data";

const RecentOrders = () => {
  return (
    <div className="w-full col-span-1 relative lg:h-[70vh] h-50vh m-auto p-4 bg-white rounded-lg overflow-scroll">
      <h1>Recent Orders</h1>
      <ul>
        {data.map((order, i) => (
          <li
            key={order.id}
            className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer"
          >
            <div className="bg-purple-100 p-3 rounded-lg">
              <FaShoppingBag className="text-purple-800" />
            </div>
            <div className="pl-2">
              <p className="font-bold text-gray-800">$ {order.total}</p>
              <p className="text-gray-400 text-sm">{order.name.first}</p>
            </div>
            <p className="lg:flex md:hidden absolute right-6 text-sm">{order.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentOrders;
