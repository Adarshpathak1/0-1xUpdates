import React from "react";

const RevenueCard = ({ title, orderCount, amount }) => {
  return (
    <div className="bg-slate-50 cursor-pointer w-1/4 p-10 rounded shadow-md">
      <div className={"text-gray-400 text-left"}>{title}?</div>
      <div className="flex justify-between">
        <div className={"font-medium"}>₹{amount}</div>
        <div className={"text-blue-400 underline"}>{orderCount} Orders</div>
      </div>
    </div>
  );
};

export default RevenueCard;
