import axios from "axios";

const API_URL = "https://expense-tracker-backend-production-aca7.up.railway.app/budget";

export const getBudget = () => {
    return axios.get(API_URL);
};