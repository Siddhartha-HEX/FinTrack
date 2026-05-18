function Transactions({ transactions, setTransactions , setEditData, }) {

    const deleteTransaction = (id) => {
    const updatedTransactions =
        transactions.filter((item) => item.id !== id);

    setTransactions(updatedTransactions);
    };
    return (
        <div className="transactions">

        <h2>Recent Transactions</h2>

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
                <tr key={item.id}>

                <td>{item.title}</td>
                <td>{item.category}</td>
                
                <td
                    style={{
                        color: item.amount > 0 ? "lime" : "red",
                        fontWeight: "bold",
                    }}
                    >
                    ₹{item.amount}
                    </td>

                <td>{item.date}</td>

                    <td>
                        <button className="edit-btn" onClick={() => setEditData(item)}>
                            Edit
                        </button>

                        <button onClick={() => deleteTransaction(item.id)}>
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