import { useState,useEffect } from "react";
import { toast } from "react-toastify";

function AddTransaction({ transactions, setTransactions, editData, setEditData, }) {

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  useEffect(() => {

    if (editData) {
      setTitle(editData.title);
      setAmount(editData.amount);
      setCategory(editData.category);
    }

  }, [editData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount || !category) {
        toast.error("Please fill all fields");
        return;
    }

    if (editData) {

      const updatedTransactions =
        transactions.map((item) =>
          item.id === editData.id
            ? {
                ...item,
                title,
                amount: Number(amount),
                category,
              }
            : item
        );

      setTransactions(updatedTransactions);

      toast.success("Transaction Updated");

      setEditData(null);

    } else {

      const newTransaction = {
        id: Date.now(),
        title,
        amount: Number(amount),
        category,
        date: new Date().toLocaleDateString(),
      };

      setTransactions([newTransaction, ...transactions]);
    }
    toast.success("Transaction Added");

    setTitle("");
    setAmount("");
    setCategory("");  };

  return (
    <div className="transaction-form">

      <h2>Add Transaction</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            >

            <option value="">Select Category</option>

            <option value="Food">Food</option>

            <option value="Shopping">Shopping</option>

            <option value="Salary">Salary</option>

            <option value="Bills">Bills</option>

        </select>

        <button type="submit">{editData ? "Update" : "Add"}</button>

      </form>

    </div>
  );
}

export default AddTransaction;