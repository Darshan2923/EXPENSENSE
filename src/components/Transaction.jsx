import React, { useContext } from 'react'
import { GlobalContext } from '../context/globalState';

const Transaction = (props) => {

    const { deleteTransaction } = useContext(GlobalContext)


    const sign = props.e.amount < 0 ? '-' : '+';
    return (
        <div>
            <li className={props.e.amount < 0 ? "minus" : "plus"}>
                {props.e.text}<span>{sign}₹{Math.abs(props.e.amount)}</span>
                <button onClick={() => deleteTransaction(props.e.id)} className="delete-btn">X</button>
            </li>
        </div>
    )
}

export default Transaction