import React, { useState } from "react";
import { register } from "../api/user";
function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
      name: name,
    };
    try {
      const data = await register(user.email, user.password, user.name);
      console.log(data);
    } catch (error) {
      alert("Loi!");
    }
  }
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
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
          <input
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default Register;
