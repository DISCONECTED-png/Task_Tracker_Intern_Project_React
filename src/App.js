import React, { useState } from 'react';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState(localStorage.getItem('username'));
  return (
    <div className="container">
      {!user ? <Login setUser={setUser} /> : <h1>Welcome, {user}!</h1>}
    </div>
  );
}

export default App;