import axios from "axios";

const API_URL =
  "http://localhost:8080/expenses/remaining-budget";

export const getBudgetSummary = () => {
  return axios.get(API_URL);
};