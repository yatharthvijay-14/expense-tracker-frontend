import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function MonthlyTrendChart({ expenses }) {

  const monthlyData = {};

  expenses.forEach((expense) => {

    if (!expense.expenseDate) return;

    const month = new Date(
      expense.expenseDate
    ).toLocaleString("default", {
      month: "short"
    });

    monthlyData[month] =
      (monthlyData[month] || 0) +
      Number(expense.amount);

  });

  const data = {

    labels: Object.keys(monthlyData),

    datasets: [
      {
        label: "Monthly Expenses",

        data: Object.values(monthlyData),

        borderColor: "#3B82F6",

        backgroundColor:
          "rgba(59,130,246,0.2)",

        tension: 0.4,

        fill: true
      }
    ]

  };

  const options = {

    responsive: true,

    plugins: {

      legend: {
        position: "top"
      },

      title: {
        display: true,
        text: "Monthly Expense Trend"
      }

    }

  };

  return (

    <div className="card shadow mt-4">

      <div className="card-body">

        <Line
          data={data}
          options={options}
        />

      </div>

    </div>

  );

}

export default MonthlyTrendChart;