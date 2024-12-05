import React from "react";
import data from "../../../data.json";

const CartOrder = ({ cartItems, setQuantity, setCartIsEmpty }) => {
  return (
    <div>
      {Object.keys(cartItems).length > 0 ? (
        <div>
          <ul>
            {Object.entries(cartItems).map(([itemName, quantity]) =>
              quantity ? (
                <li
                  className="flex items-center justify-between border-b border-gray-100 py-5"
                  key={itemName}
                >
                  <div className="flex-col">
                    <span className="font-semibold">{itemName}</span>
                    <div className="flex gap-3 text-[14px]">
                      <span className="font-bold text-orange-700">
                        {quantity}x
                      </span>
                      <span className="font-thin">
                        @{" "}
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                        }).format(
                          data.find((item) => item.name === itemName).price,
                        )}
                      </span>
                      <span className="font-bold text-gray-400">
                        {" "}
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                        }).format(
                          data.find((item) => item.name === itemName).price *
                            quantity,
                        )}
                      </span>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      setQuantity(itemName, 0);
                    }}
                  >
                    <img
                      className="w-5 rounded-full border-2 border-solid border-gray-300 p-[0.1rem] hover:cursor-pointer"
                      src="src\assets\images\icon-remove-item.svg"
                      alt=""
                    />
                  </div>
                </li>
              ) : null,
            )}
          </ul>
          <div className="flex h-20 w-full items-center justify-between">
            <span className="text-[18px]">Order Total</span>
            <span className="text-[35px] font-bold">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(
                Object.entries(cartItems).reduce(
                  (acc, [itemName, quantity]) =>
                    acc +
                    data.find((item) => item.name === itemName).price *
                      quantity,
                  0,
                ),
              )}
            </span>
          </div>
        </div>
      ) : (
        <p>No items in the cart</p>
      )}
    </div>
  );
};

export default CartOrder;
