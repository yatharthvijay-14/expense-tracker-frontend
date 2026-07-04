import axios from "axios";

const API_URL =
  "https://expense-tracker-backend-production-aca7.up.railway.app/email/send";

export const sendEmail = (email) => {

  return axios.post(
    `${API_URL}?email=${email}`
  );

};