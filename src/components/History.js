import React from 'react'
import HistoryItem from './HistoryItem'

const History = ({ spendings, deleteSpending }) => {
    console.log(spendings)
    return (

        <div className="text-start mt-2 mx-3 mb-4">
            <p className='mb-2 p-2 border-bottom'>History</p>
            <span class="border-bottom "></span>
            {
                spendings.map((spending, index) => (
                    <HistoryItem key={index} spending={spending} deleteSpending={deleteSpending} />
                ))
            }
        </div>
    )
}

export default History
