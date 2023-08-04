import React from 'react'

const Transaction = (props) => {
    const sign = props.e.amount < 0 ? '-' : '+';
    return (
        <div>
            <li className={props.e.amount < 0 ? "minus" : "plus"}>
                {props.e.text}<span>{sign}₹{Math.abs(props.e.amount)}</span><button className="delete-btn">X</button>
            </li>
        </div>
    )
}

export default Transaction