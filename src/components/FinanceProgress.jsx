function FinanceProgress({ income, expense }) {

  const total = income + Math.abs(expense);

  const incomePercent =
    (income / total) * 100;

  const expensePercent =
    (Math.abs(expense) / total) * 100;

  return (
    <div className="progress-container">

      <h2>Financial Overview</h2>

      <div className="progress-section">

        <div className="progress-labels">
          <span>Income</span>
          <span>{incomePercent.toFixed(0)}%</span>
        </div>

        <div className="progress-bar">
          <div
            className="income-progress"
            style={{ width: `${incomePercent}%` }}
          ></div>
        </div>

      </div>

      <div className="progress-section">

        <div className="progress-labels">
          <span>Expense</span>
          <span>{expensePercent.toFixed(0)}%</span>
        </div>

        <div className="progress-bar">
          <div
            className="expense-progress"
            style={{ width: `${expensePercent}%` }}
          ></div>
        </div>

      </div>

    </div>
  );
}

export default FinanceProgress;