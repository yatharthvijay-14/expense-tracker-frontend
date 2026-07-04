import { useState } from "react";
import { sendEmail } from "../services/emailService";
import { toast } from "react-toastify";

function EmailReport() {

  const [email, setEmail] = useState("");

  const handleSend = () => {

    if (!email) {
      alert("Enter Email");
      return;
    }

    sendEmail(email)
      .then(() => {

        toast.success(
  "Report Sent Successfully!"
);

        setEmail("");

      })
      .catch((error) => {

        console.error(error);

       toast.error(
  "Failed To Send Email"
);

      });

  };

  return (

    <div className="card shadow mt-4">

      <div className="card-body">

        <h3 className="mb-3">
          Send Report To Gmail
        </h3>

        <div className="row">

          <div className="col-md-8">

            <input
              type="email"
              className="form-control"
              placeholder="Enter Gmail Address"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
            />

          </div>

          <div className="col-md-4">

            <button
              className="btn btn-primary w-100"
              onClick={handleSend}
            >
              Send Report
            </button>

          </div>

        </div>

      </div>

    </div>

  );
}

export default EmailReport;