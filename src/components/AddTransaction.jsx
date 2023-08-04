import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/globalState';

const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState();

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 10000000),
            text,
            amount: +amount //we need to convert amount from string to integer adding '+' does same thing as parseInt
        }

        addTransaction(newTransaction);
    }

    return (
        <>
            <div>
                <h3>Add new transaction</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-control">
                        <label htmlFor="text">Text</label>
                        <input type="text" value={text} placeholder="Enter text..." onChange={(e) => setText(e.target.value)} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="amount">Amount <br /></label>
                        <input type="number" value={amount} placeholder="Enter amount..." onChange={(e) => setAmount(e.target.value)} />
                    </div>
                    <button className="btn">Add transaction</button>
                </form>
            </div>
        </>
    )
}
export default AddTransaction

