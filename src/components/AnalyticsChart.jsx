import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function AnalyticsChart({ expenses }) {

  const categoryTotals = {};

  expenses.forEach((expense) => {

    const category = expense.category;

    if (!categoryTotals[category]) {
      categoryTotals[category] = 0;
    }

    categoryTotals[category] += Number(
      expense.amount
    );

  });

  const data = {

    labels: Object.keys(categoryTotals),

    datasets: [
      {
        label: "Expenses",

        data: Object.values(
          categoryTotals
        ),

        backgroundColor: [
  "#3B82F6",
  "#EF4444",
  "#10B981",
  "#F59E0B",
  "#8B5CF6",
  "#EC4899"
]
      }
    ]
  };

  return (

    <div className="card shadow mt-4">

      <div className="card-body">

       <h3
  className="text-center mb-4"
  style={{
    fontWeight: "700"
  }}
>
  📊 Expense Analytics
</h3>

        <div
          style={{
            maxWidth: "500px",
            margin: "0 auto"
          }}
        >
          <Doughnut
  data={data}
  options={{
    cutout: "65%",

    plugins: {

      legend: {

        position: "bottom",

        labels: {

          color: "white",

          padding: 20,

          font: {
            size: 14
          }

        }

      }

    }

  }}
/>
        </div>

      </div>

    </div>

  );
}

export default AnalyticsChart;