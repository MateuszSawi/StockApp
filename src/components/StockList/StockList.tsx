import React from 'react';
import StockItem from './StockItem/StockItem';

type StockListProps = {
  cart: { name: string; price: number }[];
  setCart: React.Dispatch<React.SetStateAction<{ name: string; price: number }[]>>;
  stock: { name: string; price: number }[];
};

const StockList = ({ cart, setCart, stock }: StockListProps) => {

  return (
    <div className="stockListWrapper">
      <h2>My Hapag Shop</h2>
      <StockItem  cart={cart} setCart={setCart} stock={stock} />
    </div>
  );
};

export default StockList;