import { useEffect, useState } from "react";

import ExpenseForm from "../components/ExpenseForm";
import BudgetCard from "../components/BudgetCard";
import EditExpenseModal from "../components/EditExpenseModal";
import AnalyticsChart from "../components/AnalyticsChart";
import PDFDownloadButton from "../components/PDFDownloadButton";
import EmailReport from "../components/EmailReport";
import Navbar from "../components/Navbar";

import {
  getAllExpenses,
  deleteExpense
} from "../services/expenseService";
import MonthlyTrendChart
from "../components/MonthlyTrendChart";
import StatsCards
from "../components/StatsCards";
import ExcelDownloadButton
from "../components/ExcelDownloadButton";

function Dashboard() {

  const [expenses, setExpenses] = useState([]);
  const [selectedExpense, setSelectedExpense] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [darkMode, setDarkMode] =
  useState(true);

  const budget = 20000;

  const spent = expenses.reduce(
    (total, expense) =>
      total + Number(expense.amount),
    0
  );

  const remaining = budget - spent;

  const filteredExpenses = expenses.filter((expense) => {

    const matchesSearch =
      expense.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      expense.category === selectedCategory;

    return matchesSearch && matchesCategory;

  });

  const loadExpenses = () => {

    getAllExpenses()
      .then((response) => {
        setExpenses(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

  };

  const handleDelete = (id) => {

    if (!window.confirm("Delete this expense?")) {
      return;
    }

    deleteExpense(id)
      .then(() => {
        loadExpenses();
      })
      .catch((error) => {
        console.error(error);
      });

  };

  const handleLogout = () => {

    localStorage.removeItem("loggedIn");
    window.location.href = "/login";

  };

  useEffect(() => {
    loadExpenses();
  }, []);

  return (

   <div
  className={
    darkMode
      ? "container mt-4 dark-mode"
      : "container mt-4 light-mode"
  }
>

      <Navbar
  handleLogout={handleLogout}
  darkMode={darkMode}
  setDarkMode={setDarkMode}
/>
      <div
  className="card mb-4"
  style={{
    background:
      "linear-gradient(135deg,#2563eb,#7c3aed)"
  }}
>

  <div className="card-body">

    <h2>
       Welcome Back
    </h2>

    <p className="mb-0">
      Track your expenses and manage your budget efficiently.
    </p>

  </div>

</div>

      <BudgetCard
        budget={budget}
        spent={spent}
        remaining={remaining}
      />
      <StatsCards
  expenses={expenses}
/>

      {selectedExpense && (

        <EditExpenseModal
          expense={selectedExpense}
          loadExpenses={loadExpenses}
          closeModal={() =>
            setSelectedExpense(null)
          }
        />

      )}

     <div className="row mt-4">

  <div className="col-lg-6">

    <ExpenseForm
      loadExpenses={loadExpenses}
    />

  </div>

  <div className="col-lg-6">

  <AnalyticsChart
    expenses={expenses}
  />

</div>

</div>
<MonthlyTrendChart
  expenses={expenses}
/>

<div className="card shadow mt-4">

        <div className="card-body">

          <h3 className="mb-3">
            All Expenses
          </h3>

        <div className="d-flex-wrap gap-3 mb-3">
          <PDFDownloadButton
          expenses={expenses}
          />

  

  <ExcelDownloadButton
    expenses={expenses}
  />

</div>

          <div className="mb-3">

            <input
              type="text"
              className="form-control"
              placeholder="Search expenses..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
            />

          </div>

          <div className="mb-3">

            <select
              className="form-select"
              value={selectedCategory}
              onChange={(e) =>
                setSelectedCategory(e.target.value)
              }
            >

              <option value="All">
                All Categories
              </option>

              <option value="Food">
                Food
              </option>

              <option value="Travel">
                Travel
              </option>

              <option value="Entertainment">
                Entertainment
              </option>

              <option value="Shopping">
                Shopping
              </option>

              <option value="Fitness">
                Fitness
              </option>

            </select>

          </div>

          <div className="expense-table">

            <table className="table">

              <thead className="table-dark">

                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Amount</th>
                  <th>Category</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>

              </thead>

              <tbody>

                {filteredExpenses.length === 0 ? (

                  <tr>

                    <td
                      colSpan="6"
                      className="text-center"
                    >
                      No Expenses Found
                    </td>

                  </tr>

                ) : (

                  filteredExpenses.map(
                    (expense, index) => (

                      <tr key={expense.id}>

                        <td>{index + 1}</td>
                        <td>{expense.title}</td>
                        <td>₹{expense.amount}</td>
                        <td>{expense.category}</td>
                        <td>{expense.expenseDate}</td>

                        <td>

                          <button
                            className="btn btn-warning btn-sm me-2"
                            onClick={() =>
                              setSelectedExpense(expense)
                            }
                          >
                            Edit
                          </button>

                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() =>
                              handleDelete(expense.id)
                            }
                          >
                            Delete
                          </button>

                        </td>

                      </tr>

                    )
                  )

                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

     

      <EmailReport />

    </div>

  );
}

export default Dashboard;