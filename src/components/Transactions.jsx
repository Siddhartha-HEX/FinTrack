import {
  deleteDoc,
  doc,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

function Transactions({
  transactions,
  setTransactions,
  setEditData,
}) {

  const deleteTransaction =
    async (firestoreId) => {

      try {

        await deleteDoc(
          doc(
            db,
            "transactions",
            firestoreId
          )
        );

        const updatedTransactions =
          transactions.filter(
            (item) =>
              item.firestoreId !==
              firestoreId
          );

        setTransactions(
          updatedTransactions
        );

      } catch (error) {

        console.log(error);

      }
  };

  return (
    <div className="transactions">

      <h2>
        Recent Transactions
      </h2>

      <table>

        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {transactions.map((item) => (
            <tr
              key={
                item.firestoreId ||
                item.id
              }
            >

              <td>{item.title}</td>

              <td>{item.category}</td>

              <td
                style={{
                  color:
                    item.amount > 0
                      ? "lime"
                      : "red",

                  fontWeight: "bold",
                }}
              >
                ₹{item.amount}
              </td>

              <td>{item.date}</td>

              <td>

                <button
                  className="edit-btn"
                  onClick={() =>
                    setEditData(item)
                  }
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() =>
                    deleteTransaction(
                      item.firestoreId
                    )
                  }
                >
                  Delete
                </button>

              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Transactions;