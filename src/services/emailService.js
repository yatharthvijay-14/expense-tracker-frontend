import axios from "axios";

const API_URL =
  "http://localhost:8080/email/send";

export const sendEmail = (email) => {

  return axios.post(
    `${API_URL}?email=${email}`
  );

};