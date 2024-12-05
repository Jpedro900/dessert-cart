import React, { useState, useEffect } from "react";
import CartOrder from "../CartOrder/CartOrder";

const Cart = ({ cartItems, updateCartQuantity, toggleModal }) => {
  const [isEmpty, setIsEmpty] = useState(true);

  const goToTop = () => {
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    // Verifica se o carrinho está vazio após cada atualização
    setIsEmpty(Object.keys(cartItems).length === 0);
  }, [cartItems]); // Chama o efeito sempre que cartItems mudar

  return (
    <div className="h-auto bg-white p-5 lg:w-auto">
      <h1 className="text-[1.7rem] font-bold text-orange-700">
        Your Cart ({Object.values(cartItems).reduce((a, b) => a + b, 0)}){" "}
      </h1>

      {isEmpty ? (
        <div className="mb-8 mt-10 text-center">
          <img
            className="m-auto md:size-[200px] lg:size-[120px]"
            src="src/assets/images/illustration-empty-cart.svg"
            alt="cakeimg"
          />
          <span
            className="text-[14px] font-bold text-[#AD8A85]"
            id="cakephrase"
          >
            Your added items will appear here
          </span>
        </div>
      ) : (
        <div>
          <CartOrder
            cartItems={cartItems}
            setQuantity={(itemName, newQuantity) =>
              updateCartQuantity(itemName, newQuantity)
            }
          />
          <div className="m-auto flex h-16 w-[95%] items-center justify-center gap-2 rounded-lg bg-[#FFFBF4] text-[18px]">
            <img
              className="w-6"
              src="src/assets/images/icon-carbon-neutral.svg"
              alt=""
            />
            <span>
              This is a <span className="font-semibold">carbon-neutral</span>{" "}
              delivery
            </span>
          </div>
          <div>
            <button
              className="mt-5 w-full rounded-3xl bg-orange-700 py-[1rem] text-white hover:bg-orange-800 active:scale-95"
              onClick={() => {
                toggleModal();
                goToTop();
              }}
            >
              Confirm Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
