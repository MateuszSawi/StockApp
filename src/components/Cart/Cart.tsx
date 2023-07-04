import React from 'react';

type CartProps = {
  cart: { name: string; price: number }[];
  setCart: React.Dispatch<React.SetStateAction<{ name: string; price: number }[]>>;
};

const Cart = ({ cart, setCart }: CartProps) => {

  const handleClickDelete = (item: { name: string; price: number }) => {
    setCart((prevCart) => prevCart.filter((CartItem) => CartItem.name !== item.name));
  };

  let summaryPrice: number = 0;

  cart.forEach(cartItem => {
    summaryPrice += cartItem.price;
  })

  return (
    <div className="cartWrapper">
      <h2>CART</h2>

      <div className="cartList">
        {cart.map((cartItem, index) => {
          return (
            <div key={`${cartItem.name}-${cartItem.price}`}>
              <button className="buttonCart" onClick={() => handleClickDelete(cartItem)}>
                Delete from cart - {cartItem.name} {cartItem.price}$
              </button>
            </div>
          )
        })}
      </div>

      <p className="summaryPrice"><strong>Summary price: {summaryPrice}$</strong></p>
    </div>
  );
};

export default Cart;