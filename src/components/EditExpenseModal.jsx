import { useState, useEffect } from "react";
import { updateExpense } from "../services/expenseService";

function EditExpenseModal({
  expense,
  loadExpenses,
  closeModal
}) {

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {

    if (expense) {
      setTitle(expense.title);
      setAmount(expense.amount);
      setCategory(expense.category);
    }

  }, [expense]);

  const handleSubmit = (e) => {

    e.preventDefault();

    updateExpense(expense.id, {
      title,
      amount,
      category
    })
      .then(() => {

        loadExpenses();

        closeModal();

      })
      .catch((error) => {
        console.error(error);
      });

  };

  return (

    <div className="card border-warning shadow p-3 mb-4">

      <h3>Edit Expense</h3>

      <form onSubmit={handleSubmit}>

        <input
          className="form-control mb-2"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <input
          className="form-control mb-2"
          value={amount}
          onChange={(e) =>
            setAmount(e.target.value)
          }
        />

        <input
          className="form-control mb-2"
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        />

        <button
          className="btn btn-success me-2"
          type="submit"
        >
          Update
        </button>

        <button
          type="button"
          className="btn btn-secondary"
          onClick={closeModal}
        >
          Cancel
        </button>

      </form>

    </div>

  );
}

export default EditExpenseModal;