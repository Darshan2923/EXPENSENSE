import React from 'react'

function TransactionList() {
    return (
        <div>
            <h3>History</h3>
            <ul className="list" id='list'>
                <li className="minus">
                    Cash<span>-₹400</span><button className="delete-btn">X</button>
                </li>
            </ul>
        </div>
    )
}

export default TransactionList