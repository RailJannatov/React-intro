import { useContext } from 'react';
import UserContext from './userContext';

export default function Header() {
  const { cart } = useContext(UserContext);
  return (
    <nav>
      <h1 className='logo'>Padre Gino's Pizza</h1>
      <div className='nav-cart'>
        🛒<span className='nav-cart-number'>{cart.length}</span>
      </div>
    </nav>
  );
}
