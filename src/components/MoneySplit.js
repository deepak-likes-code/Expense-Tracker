import React from 'react'

const MoneySplit = ({ totalEarned, totalSpent }) => {
    return (
        <div className="d-flex flex-row card justify-content-around align-items-center">
            <h5 style={{ color: 'red' }}> Spent: {totalSpent}</h5>
            |
            <h5 style={{ color: 'green' }}>Earnings: {totalEarned}</h5>
        </div>
    )
}

export default MoneySplit
