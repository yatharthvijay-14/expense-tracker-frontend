import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function PDFDownloadButton({ expenses }) {

    const downloadPDF = () => {

        const doc = new jsPDF();

        doc.setFontSize(18);

        doc.text(
            "Expense Tracker Report",
            14,
            20
        );

        const tableData = expenses.map(
            (expense) => [

                expense.title,

                expense.amount,

                expense.category,

                expense.expenseDate

            ]
        );

        autoTable(doc, {

            head: [[
                "Title",
                "Amount",
                "Category",
                "Date"
            ]],

            body: tableData,

            startY: 30

        });

        doc.save(
            "expense-report.pdf"
        );

    };

    return (

        <button
            className="btn btn-success mb-3"
            onClick={downloadPDF}
        >
            📄 Download Statement
        </button>

    );
}

export default PDFDownloadButton;