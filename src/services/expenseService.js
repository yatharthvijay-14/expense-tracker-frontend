import axios from "axios";

const API_URL = "http://localhost:8080/expenses";

export const getAllExpenses = () => {
  return axios.get(API_URL);
};

export const addExpense = (expense) => {
  return axios.post(API_URL, expense);
};

export const deleteExpense = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

export const updateExpense = (id, expense) => {
  return axios.put(`${API_URL}/${id}`, expense);
};