import axios from "axios";

const API_KEY = "AIzaSyDp-oC5URPkz2xEanrzp0Y-CyvO9FpM9IM";

export const createUser = async (email, password) => {
  const response = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
      API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
};
