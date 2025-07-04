import React, { useState } from 'react';

function Login({ setUser }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('username', username.trim());
    setUser(username.trim());
  };

  return (
    <div className="login-wrapper">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2 className="login-title">Welcome Back</h2>

        <input
          className="login-input"
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <button className="login-button" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Login;
