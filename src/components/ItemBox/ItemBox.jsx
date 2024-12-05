import React, { useEffect, useState } from "react";
import AddToCart from "./../AddToCart/AddToCart";

const ItemBox = ({
  image,
  item,
  description,
  price,
  updateQuantity,
  currentQuantity,
}) => {
  const [currentImage, setCurrentImage] = useState(image.default);
  const [IsClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const updateImage = () => {
      if (window.innerWidth >= 1024) {
        setCurrentImage(image.lg); // Desktop
      } else if (window.innerWidth >= 768) {
        setCurrentImage(image.md); // Tablet
      } else {
        setCurrentImage(image.default); // Mobile
      }
    };

    updateImage();
    window.addEventListener("resize", updateImage);
    return () => window.removeEventListener("resize", updateImage);
  }, [image]);

  return (
    <div className="m-auto mb-6 grid">
      <div className="relative m-auto mb-8">
        <img
          src={currentImage}
          alt={description}
          className={`m-auto rounded-lg ${IsClicked ? "border-2 border-orange-500" : ""}`}
        />
        <AddToCart
          onAddToCartClick={() => {
            setIsClicked(true);
          }}
          nothingOnCart={() => {
            setIsClicked(false);
          }}
          quantity={currentQuantity} // Passando a quantidade para o AddToCart
          setQuantity={(newQuantity) => updateQuantity(item, newQuantity)} // Passando a função de atualização da quantidade
        />
      </div>
      <span className="text-[14px] font-thin">{item}</span>
      <span className="font-bold">{description}</span>
      <span className="text-[16px] font-bold text-orange-700">{price}</span>
    </div>
  );
};

export default ItemBox;
