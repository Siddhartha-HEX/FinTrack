import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#8b5cf6",
  "#06b6d4",
  "#ec4899",
  "#14b8a6",
];

function ExpenseChart({ transactions }) {

  const categoryData = transactions
    .filter((item) => item.amount < 0)
    .reduce((acc, item) => {

      const existingCategory =
        acc.find((data) => data.name === item.category);

      if (existingCategory) {
        existingCategory.value += Math.abs(item.amount);
      } else {
        acc.push({
          name: item.category,
          value: Math.abs(item.amount),
        });
      }

      return acc;

    }, []);

  return (
    <div className="chart-container">

      <h2>Expense Categories</h2>

      <ResponsiveContainer width="100%" height={350}>

        <PieChart>

          <Pie
            data={categoryData}
            dataKey="value"
            outerRadius={120}
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(0)}%`
            }
          >

            {categoryData.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}

          </Pie>

          <Tooltip />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );
}

export default ExpenseChart;