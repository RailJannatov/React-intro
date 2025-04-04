import './App.css';
import { useState } from 'react';

import UserContext from './components/userContext';

import Header from './components/Header';
import Order from './components/Order';

// props drilling
// context

function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className='test'>
      <UserContext.Provider value={{ cart, setCart }}>
          <Header />
          <Order />
        </UserContext.Provider>
        {/* <Footer /> */}
      {/* <Assets/>
      <Users/> */}
    </div>
  );
}

export default App;
