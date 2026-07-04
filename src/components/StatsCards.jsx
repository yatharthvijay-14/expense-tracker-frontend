function StatsCards({ expenses }) {

  const totalExpenses = expenses.reduce(
    (sum, expense) =>
      sum + Number(expense.amount),
    0
  );

  const totalTransactions =
    expenses.length;

  const highestExpense =
    expenses.length > 0
      ? Math.max(
          ...expenses.map(
            (expense) =>
              Number(expense.amount)
          )
        )
      : 0;

  const averageExpense =
    totalTransactions > 0
      ? (
          totalExpenses /
          totalTransactions
        ).toFixed(2)
      : 0;

  return (

    <div className="row mb-4">

      <div className="col-md-3 mb-3">

        <div
          className="card shadow h-100 text-center"
          style={{
            background:
              "linear-gradient(135deg,#2563eb,#1d4ed8)"
          }}
        >

          <div className="card-body text-white">

            <h6>
              💰 Total Expenses
            </h6>

            <h3>
              ₹{totalExpenses}
            </h3>

          </div>

        </div>

      </div>

      <div className="col-md-3 mb-3">

        <div
          className="card shadow h-100 text-center"
          style={{
            background:
              "linear-gradient(135deg,#8b5cf6,#7c3aed)"
          }}
        >

          <div className="card-body text-white">

            <h6>
              🧾 Transactions
            </h6>

            <h3>
              {totalTransactions}
            </h3>

          </div>

        </div>

      </div>

      <div className="col-md-3 mb-3">

        <div
          className="card shadow h-100 text-center"
          style={{
            background:
              "linear-gradient(135deg,#ef4444,#dc2626)"
          }}
        >

          <div className="card-body text-white">

            <h6>
              📈 Highest Expense
            </h6>

            <h3>
              ₹{highestExpense}
            </h3>

          </div>

        </div>

      </div>

      <div className="col-md-3 mb-3">

        <div
          className="card shadow h-100 text-center"
          style={{
            background:
              "linear-gradient(135deg,#10b981,#059669)"
          }}
        >

          <div className="card-body text-white">

            <h6>
              📊 Average Expense
            </h6>

            <h3>
              ₹{averageExpense}
            </h3>

          </div>

        </div>

      </div>

    </div>

  );
}

export default StatsCards;