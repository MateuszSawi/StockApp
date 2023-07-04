import React from 'react';

type StockItemProps = {
  cart: { name: string; price: number }[];
  setCart: React.Dispatch<React.SetStateAction<{ name: string; price: number }[]>>;
  stock: { name: string; price: number }[];
};

const StockItem = ({ cart, setCart, stock }: StockItemProps) => {
  const handleClick = (item: { name: string; price: number }) => {
    setCart((prevCart) => [...prevCart, item]);
    setCart((prevCart) => [...prevCart].sort((a, b) => a.price - b.price));
  };

  return (
    <span>
      {stock.map((stockItem, index) => {
        let isItInCart = cart.some((cartItem) => cartItem.name === stockItem.name);

        return (
          <div key={index}>
            {!isItInCart && (
              <div>
                <button className="buttonStock" onClick={() => handleClick(stockItem)}>
                  Add to cart - {stockItem.name} {stockItem.price}$
                </button>
              </div>
            )}
          </div>
        );
      })}
    </span>
  );
};

export default StockItem;