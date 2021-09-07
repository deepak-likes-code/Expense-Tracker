import { useState, createContext, useEffect } from 'react'

export const SpendingContext = createContext();


const SpendingState = props => {

    const [spendings, setSpendings] = useState([])

    useEffect(() => {

        const getSpendings = async () => {
            const spendingsFromServer = await fetchSpendings()
            setSpendings(spendingsFromServer)
        }
        getSpendings()
    }, [])

    // Fetch Spendings

    const fetchSpendings = async () => {
        const res = await fetch('http://localhost:5000/spendings')
        const data = await res.json()
        return data
    }


    const onAdd = async (onAdd) => {

        const res = await fetch(`http://localhost:5000/spendings/`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ ...onAdd, spent: !onAdd.spent })
        })

        const data = await res.json()
        setSpendings([...spendings, data])

        // setSpendings([...spendings, { ...onAdd, spent: !onAdd.spent }])
        total()
    }


    const deleteSpending = async (id) => {
        await fetch(`http://localhost:5000/spendings/${id}`, {
            method: 'DELETE'
        })


        setSpendings(spendings.filter((spending) => (spending.id !== id)))
    }

    const total = () => {
        const spent = spendings.filter((spend) => (spend.spent))
        const earned = spendings.filter((spend) => (!spend.spent))
        const totalSpent = spent.reduce(function (acc, cur) { return acc + cur.amount }, 0)
        const totalEarned = earned.reduce(function (acc, cur) { return acc + cur.amount }, 0)
        const balance = totalEarned - totalSpent
        return { balance, totalSpent, totalEarned }
    }


    return <SpendingContext.Provider value={
        spendings, total, setSpendings, deleteSpending, onAdd
    }>

        {props.children}
    </SpendingContext.Provider>
}

export default SpendingState