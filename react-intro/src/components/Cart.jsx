import { useContext } from 'react';
import UserContext from './userContext';

export default function Cart({  checkout }) {
  const { cart } = useContext(UserContext);
  return (
    <div className='cart'>
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
      <p>Total: {cart.length}</p>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
}
