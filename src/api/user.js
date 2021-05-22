import axios, { Method } from "axios";

const url = "http://localhost:5000/auth";

async function login(email, password) {
  const loginRequest = {
    url: `${url}/login`,
    method: "POST",
    data: { email, password },
    baseUrl: url,
  };
  const response = await axios.request(loginRequest);
  return response.data;
}
async function register(email, password, name) {
  const registerRequest = {
    url: `${url}/register`,
    method: "POST",
    data: { email, password, name },
    baseUrl: url,
  };
  const response = await axios.request(registerRequest);
  return response.data;
}
export { login, register };
