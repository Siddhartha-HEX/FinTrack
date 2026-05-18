import Navbar from "../components/Navbar";
import ExpenseChart from "../components/ExpenseChart";
import Transactions from "../components/Transactions";
import AddTransaction from "../components/AddTransaction";
import FinanceProgress from "../components/FinanceProgress";
import { motion } from "framer-motion";
import {
  Wallet,
  TrendingUp,
  TrendingDown,
  Receipt,
} from "lucide-react";

import { useState, useEffect } from "react";

function MainContent() {

  const [transactions, setTransactions] = useState(() => {

    const savedTransactions =
      localStorage.getItem("transactions");

    return savedTransactions
      ? JSON.parse(savedTransactions)
      : [
          {
            id: 1,
            title: "Groceries",
            amount: -2000,
            category: "Food",
            date: "7 May 2026",
          },
          {
            id: 2,
            title: "Salary",
            amount: 50000,
            category: "Salary",
            date: "5 May 2026",
          },
        ];
  });

  const [editData, setEditData] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");

  const [filterCategory, setFilterCategory] = useState("All");

  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    localStorage.setItem(
      "transactions",
      JSON.stringify(transactions)
    );
  }, [transactions]);

  const income = transactions
    .filter((item) => item.amount > 0)
    .reduce((acc, item) => acc + item.amount, 0);

  const expense = transactions
    .filter((item) => item.amount < 0)
    .reduce((acc, item) => acc + item.amount, 0);

  const balance = income + expense;

  const totalTransactions =
    transactions.length;

  const highestExpense =
    Math.min(
      ...transactions.map((item) => item.amount)
    );

  const highestIncome =
    Math.max(
      ...transactions.map((item) => item.amount)
    );

  const filteredTransactions =
    transactions.filter((item) => {

      const matchesSearch =
        item.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesCategory =
        filterCategory === "All"
          ? true
          : item.category === filterCategory;

      return matchesSearch && matchesCategory;
    });

  return (
    <div
      className={
        darkMode
          ? "main-content dark"
          : "main-content light"
      }
    >

      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <h1 className="heading">Welcome Back 👋</h1>

      <div className="cards">

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="card-title">
            <Wallet size={20} />
            Total Balance
          </h3>
          <p>₹{balance}</p>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="card-title">
            <TrendingUp size={20} />
            Total Income
          </h3>
          <p>₹{income}</p>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="card-title">
            <TrendingDown size={20} />
            Total Expense
          </h3>
          <p>₹{expense}</p>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="card-title">
            <Receipt size={20} />
            Total Transactions
          </h3>
          <p>{totalTransactions}</p>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Highest Income</h3>
          <p>₹{highestIncome}</p>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Highest Expense</h3>
          <p>₹{highestExpense}</p>
        </motion.div>

      </div>

      <ExpenseChart transactions={transactions} />

      <AddTransaction
        transactions={transactions}
        setTransactions={setTransactions}
        editData={editData}
        setEditData={setEditData}
      />

      <Transactions
        transactions={filteredTransactions}
        setTransactions={setTransactions}
        setEditData={setEditData}
      />

      <FinanceProgress
        income={income}
        expense={expense}
      />

    </div>
  );
}

export default MainContent;