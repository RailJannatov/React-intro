import { useEffect, useState, useContext } from 'react';
import Cart from './Cart';
import User from './User';
import UserContext from './userContext';

export default function Order() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(true);

  const {cart,setCart} = useContext(UserContext);


  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const userResponse = await fetch(
      'https://jsonplaceholder.typicode.com/users',
    );
    const users = await userResponse.json();
    setUsers(users);
    setLoading(false);
  }

  if (loading) {
    return <h2>Loading …</h2>;
  }

  return (
    <div className='order-page'>
      <div className='order'>
        <h2>Create Order</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setCart([...cart, { name: user, id: cart.length }]);
          }}
        >
          <div>
            <div>
              <label htmlFor='user'>User</label>
              <select
                onChange={(e) => {
                  setUser(e.target.value);
                }}
                name='user'
                value={user}
              >
                {users.map((user) => (
                  <option key={user.id} value={user.name}>
                    {user.name}
                  </option>
                ))}
              </select>
            </div>

            <button type='submit'>Add to Cart</button>
          </div>
          {loading ? (
            <h3>LOADING …</h3>
          ) : (
            <div className='order-pizza'>
              <User name={user.name} username={user.username} />
            </div>
          )}
        </form>
      </div>
      {loading ? <h2>LOADING …</h2> : <Cart />}
    </div>
  );
}
