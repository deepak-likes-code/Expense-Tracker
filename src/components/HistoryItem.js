import React from 'react'
import { FaTimes } from 'react-icons/fa'

const HistoryItem = ({ spending, deleteSpending }) => {
    return (
        <div className={`${spending.spent ? 'red' : 'green'} card d-flex flex-row justify-content-between p-2 mb-2 align-items-center`} >
            <p>{spending.item}</p>
            <p>{spending.spent ? '-' : '+'} {spending.amount}    <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => deleteSpending(spending.id)} />  </p>

        </div>
    )
}

export default HistoryItem
