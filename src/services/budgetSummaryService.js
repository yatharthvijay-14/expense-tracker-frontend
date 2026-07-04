import axios from "axios";

const API_URL =
  "https://expense-tracker-backend-production-aca7.up.railway.app/expenses/remaining-budget";

export const getBudgetSummary = () => {
  return axios.get(API_URL);
};