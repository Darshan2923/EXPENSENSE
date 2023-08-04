import React, { useContext } from 'react'
import { GlobalContext } from '../context/globalState'
import Transaction from './Transaction'

function TransactionList() {
    const { transactions } = useContext(GlobalContext)



    return (
        <div>
            <h3>History</h3>
            <ul className="list" id='list'>
                {transactions.map((e) => (
                    <Transaction key={e.id} e={e} />
                ))}

            </ul>
        </div>
    )
}

export default TransactionList