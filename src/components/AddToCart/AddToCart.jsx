import React, { useState, useEffect } from "react";

const AddToCart = ({
  onAddToCartClick,
  nothingOnCart,
  quantity,
  setQuantity,
}) => {
  const [IsClicked, setIsClicked] = useState(false);

  // Sempre que a quantidade for 0, chamar nothingOnCart
  useEffect(() => {
    if (quantity === 0) {
      nothingOnCart();
    }
  }, [quantity, nothingOnCart]);

  const handleClick = () => {
    if (quantity === 0) {
      setQuantity(1); // Se a quantidade for 0, inicializa com 1
    }
    setIsClicked(true);
    onAddToCartClick(); // Chama a função passada para o ItemBox
  };

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity); // Atualiza a quantidade
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity); // Atualiza a quantidade
    }
  };

  return (
    <div
      className={`absolute bottom-0 left-1/2 w-[160px] translate-x-[-50%] translate-y-1/2 rounded-full border border-solid border-gray-500 py-[0.70rem] text-[14px] font-semibold shadow-sm shadow-slate-400 transition-all hover:scale-105 hover:cursor-pointer hover:border-orange-700 hover:text-orange-700 hover:shadow-orange-400 ${IsClicked && quantity > 0 ? "border-none bg-orange-600" : "bg-white"}`}
      onClick={handleClick}
    >
      <div
        className={`justify-center gap-2 ${IsClicked && quantity > 0 ? "hidden" : "flex"}`}
      >
        <img src=".src/assets/images/icon-add-to-cart.svg" alt="" />
        <span>Add to Cart</span>
      </div>
      <div
        className={`justify-between px-6 ${IsClicked && quantity > 0 ? "flex" : "hidden"}`}
      >
        <div
          className="flex justify-center rounded-full border-2 p-1 active:bg-white"
          onClick={handleDecrement}
        >
          <img src="./src/assets/images/icon-decrement-quantity.svg" alt="" />
        </div>
        <span className="text-white" id="cartCount">
          {quantity}
        </span>
        <div
          className="flex justify-center rounded-full border-2 p-1 active:bg-white"
          onClick={handleIncrement}
        >
          <img src="./src/assets/images/icon-increment-quantity.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
