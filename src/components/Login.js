import React, { useState } from "react";
import { login } from "../api/user";
import { Link } from "react-router-dom";
function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    try {
      const data = await login(user.email, user.password);
      console.log(data);
    } catch (error) {
      alert("Loi!");
    }
  }
  return (
    <div>
      <h1>Form login</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <Link to="/register">Sign up</Link>
      </form>
    </div>
  );
}

export default Login;
