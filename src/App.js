
import Header from './components/Header'
import History from './components/History'
import AddTransaction from './components/AddTransaction'
import SpendingState from './context/SpendingContext'

import { useState, useEffect, useContext } from 'react'

function App() {



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



  const [spendings, setSpendings] = useState([])

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

  total()

  return (
    <SpendingState>

      <div className="App container text-center mt-5">
        <Header total={total} />
        <History spendings={spendings} deleteSpending={deleteSpending} />
        <AddTransaction onAdd={onAdd} />
      </div>
    </SpendingState>
  );
}

export default App;
