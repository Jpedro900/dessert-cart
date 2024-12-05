import React, { useState, useEffect } from "react";
import ItemBox from "./components/ItemBox/ItemBox";
import Cart from "./components/Cart/Cart";
import data from "../data.json";
import Modal from "./components/Modal/Modal";

function App() {
  // Estado para armazenar a quantidade dos itens
  const [cartItems, setCartItems] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isModalOpen]);

  // Função para atualizar a quantidade de um item específico no carrinho
  const updateCartQuantity = (itemName, quantity) => {
    setCartItems((prevCartItems) => {
      const newCartItems = { ...prevCartItems };

      if (quantity === 0) {
        // Remover o item do carrinho
        delete newCartItems[itemName];
      } else {
        // Atualizar a quantidade do item
        newCartItems[itemName] = quantity;
      }

      return newCartItems;
    });
  };

  return (
    <div
      className={`bg-[#fffbf4] p-4 font-body lg:flex lg:justify-center lg:gap-5 lg:p-10 ${isModalOpen ? "overflow-hidden" : ""}`}
    >
      {isModalOpen && (
        <div className="absolute left-0 top-0 z-10 h-full w-full bg-black opacity-60">
          a
        </div>
      )}
      <div className="lg:w-[60%]">
        <h1 className="mb-10 text-[2.8rem] font-bold">Desserts</h1>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          {data.map((item, index) => (
            <ItemBox
              key={index}
              image={{
                default: item.image.mobile,
                md: item.image.tablet,
                lg: item.image.desktop,
              }}
              item={item.name}
              description={item.category}
              price={`$${item.price.toFixed(2)}`}
              // Passando a quantidade e a função para atualizar a quantidade
              updateQuantity={updateCartQuantity}
              currentQuantity={cartItems[item.name] || 0} // Recupera a quantidade do item no carrinho
            />
          ))}
        </div>
      </div>
      <div className="h-auto lg:w-[35%]">
        <Cart
          cartItems={cartItems}
          updateCartQuantity={updateCartQuantity}
          toggleModal={() => setIsModalOpen(true)}
        />
      </div>
      <div className={`${isModalOpen ? "block" : "hidden"}`}>
        <Modal cartItems={cartItems} />
      </div>
    </div>
  );
}

export default App;
