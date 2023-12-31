import axios from "axios";

const API_KEY = "AIzaSyDp-oC5URPkz2xEanrzp0Y-CyvO9FpM9IM";

async function authenticate(mode, email, password) {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
//   console.log(response.data);
const token = response.data.idToken
return token
}

export const createUser = (email, password) => {
  return authenticate("signUp", email, password);
};
export const login = (email, password) => {
  return authenticate("signInWithPassword", email, password);
};
