import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

function ExcelDownloadButton({ expenses }) {

  const downloadExcel = () => {

    const excelData = expenses.map(
      (expense) => ({
        Title: expense.title,
        Amount: expense.amount,
        Category: expense.category,
        Date: expense.expenseDate
      })
    );

    const worksheet =
      XLSX.utils.json_to_sheet(
        excelData
      );

    const workbook =
      XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Expenses"
    );

    const excelBuffer =
      XLSX.write(workbook, {
        bookType: "xlsx",
        type: "array"
      });

    const fileData = new Blob(
      [excelBuffer],
      {
        type:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      }
    );

    saveAs(
      fileData,
      "expense-report.xlsx"
    );
  };

  return (

    <button
      className="btn btn-success ms-2"
      onClick={downloadExcel}
    >
      📊 Download Excel
    </button>

  );
}

export default ExcelDownloadButton;