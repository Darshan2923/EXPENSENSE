import React, { useState } from 'react'

const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState();
    return (
        <>
            <div>
                <h3>Add new transaction</h3>
                <form >
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
