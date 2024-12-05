import React from "react";
import data from "../../../data.json";

const Modal = ({ cartItems }) => {
  return (
    <div className="absolute bottom-0 left-0 z-50 w-full rounded-t-2xl bg-white px-8 py-10 lg:translate-x-[-50%] lg:translate-y-1/2 lg:bottom-[50%] lg:left-[50%] lg:w-[45%] lg:rounded-2xl">
      <img
        src="./assets/images/icon-order-confirmed.svg"
        alt="OrderConfirmed"
        className="mb-6"
      />
      <h1 className="pr-44 text-[2.8rem] font-bold leading-tight">
        Order Confirmed
      </h1>
      <span className="mt-5 text-[1.28rem] font-thin">
        We hope you enjoy your food!
      </span>
      <div className="mt-8 rounded-lg bg-[#FFFBF4]">
        <ul
          className={`px-5 ${Object.keys(cartItems).length > 3 ? "max-h-[300px] overflow-y-scroll" : ""}`}
        >
          {Object.entries(cartItems).map(([itemName, quantity]) => (
            <li
              className="relative flex items-center gap-4 border-b border-gray-100 py-5"
              key={itemName}
            >
              <img
                className="w-16 rounded-lg"
                src={
                  data.find((item) => item.name === itemName).image.thumbnail
                }
                alt={itemName}
              />
              <div className="flex flex-col gap-3">
                <span className="max-w-[200px] truncate text-[1.1rem] font-bold">
                  {itemName}
                </span>
                <div className="flex gap-4 text-[1rem]">
                  <span className="font-bold text-orange-700">{quantity}x</span>
                  <span className="font-thin">
                    @{" "}
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(
                      data.find((item) => item.name === itemName).price,
                    )}
                  </span>
                </div>
              </div>
              <span className="absolute right-0 text-[1.2rem] font-bold">
                {" "}
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(
                  data.find((item) => item.name === itemName).price * quantity,
                )}
              </span>
            </li>
          ))}
        </ul>
        <div className="flex w-full items-center justify-between p-5">
          <span className="text-[18px]">Order Total</span>
          <span className="text-[2rem] font-extrabold">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(
              Object.entries(cartItems).reduce(
                (acc, [itemName, quantity]) =>
                  acc +
                  data.find((item) => item.name === itemName).price * quantity,
                0,
              ),
            )}
          </span>
        </div>
      </div>
      <button
        className="mt-8 w-full rounded-full bg-orange-600 py-4 text-white hover:bg-orange-700"
        onClick={() => {
          window.location.reload();
        }}
      >
        Start New Order
      </button>
    </div>
  );
};

export default Modal;
