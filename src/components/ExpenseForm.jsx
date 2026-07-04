import { useState } from "react";
import { addExpense } from "../services/expenseService";
import { toast } from "react-toastify";

function ExpenseForm({ loadExpenses }) {

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [expenseDate, setExpenseDate] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        const expense = {
            title,
            amount,
            category,
            expenseDate
        };
        addExpense(expense)
  .then(() => {

    toast.success(
      "Expense Added Successfully!"
    );

    loadExpenses();

    setTitle("");
    setAmount("");
    setCategory("");
    setExpenseDate("");

  })

        
            .catch((error) => {
                console.error(error);
              toast.error(
  "Failed to add expense"
);
            });

    };

    return (

        <div className="card shadow p-4 mb-4">

            <h3 className="mb-3">
                Add Expense
            </h3>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">

                    <label className="form-label">
                        Title
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Expense Title"
                        value={title}
                        onChange={(e) =>
                            setTitle(e.target.value)
                        }
                        required
                    />

                </div>

                <div className="mb-3">

                    <label className="form-label">
                        Amount
                    </label>

                    <input
                        type="number"
                        className="form-control"
                        placeholder="Enter Amount"
                        value={amount}
                        onChange={(e) =>
                            setAmount(e.target.value)
                        }
                        required
                    />

                </div>

                <div className="mb-3">

                    <label className="form-label">
                        Category
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Food, Travel, Shopping..."
                        value={category}
                        onChange={(e) =>
                            setCategory(e.target.value)
                        }
                        required
                    />

                </div>

                <div className="mb-3">

                    <label className="form-label">
                        Date
                    </label>

                    <input
                        type="date"
                        className="form-control"
                        value={expenseDate}
                        onChange={(e) =>
                            setExpenseDate(e.target.value)
                        }
                        required
                    />

                </div>

                <button
                    type="submit"
                    className="btn btn-primary w-100"
                >
                    Add Expense
                </button>

            </form>

        </div>

    );
}

export default ExpenseForm;