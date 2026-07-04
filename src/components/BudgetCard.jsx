import {
  FaWallet,
  FaArrowTrendDown,
  FaPiggyBank
} from "react-icons/fa6";

import { motion } from "framer-motion";

function BudgetCard({ budget, spent, remaining }) {

  return (

    <div className="row mb-4">

      <motion.div
        className="col-md-4 mb-3"
        whileHover={{
          scale: 1.05,
          y: -8
        }}
      >

        <div
          className="card shadow h-100"
          style={{
            background:
              "linear-gradient(135deg,#2563eb,#1d4ed8)"
          }}
        >

          <div className="card-body text-center">

            <FaWallet size={40} className="mb-3" />

            <h5>Monthly Budget</h5>

            <h2>₹{budget}</h2>

          </div>

        </div>

      </motion.div>

      <motion.div
        className="col-md-4 mb-3"
        whileHover={{
          scale: 1.05,
          y: -8
        }}
      >

        <div
          className="card shadow h-100"
          style={{
            background:
              "linear-gradient(135deg,#ef4444,#dc2626)"
          }}
        >

          <div className="card-body text-center">

            <FaArrowTrendDown size={40} className="mb-3" />

            <h5>Total Spent</h5>

            <h2>₹{spent}</h2>

          </div>

        </div>

      </motion.div>

      <motion.div
        className="col-md-4 mb-3"
        whileHover={{
          scale: 1.05,
          y: -8
        }}
      >

        <div
          className="card shadow h-100"
          style={{
            background:
              "linear-gradient(135deg,#10b981,#059669)"
          }}
        >

          <div className="card-body text-center">

            <FaPiggyBank size={40} className="mb-3" />

            <h5>Remaining</h5>

            <h2>₹{remaining}</h2>

          </div>

        </div>

      </motion.div>

    </div>

  );
}

export default BudgetCard;