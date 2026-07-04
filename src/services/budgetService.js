import axios from "axios";

const API_URL = "http://localhost:8080/budget";

export const getBudget = () => {
    return axios.get(API_URL);
};