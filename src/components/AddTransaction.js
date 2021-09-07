import { useState } from 'react'

const AddTransaction = ({ onAdd }) => {


    const [item, setItem] = useState('')
    const [amount, setAmount] = useState(0)
    const [spent, setIncome] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();
        if (!item) {
            alert('Please add text')
            return
        }
        onAdd({ item, amount, spent });
        setItem('')
        setAmount(0)
        setIncome(false)
    }

    return (

        <div className="text-start mt-2 mx-3">
            <p className='mb-2 p-2 border-bottom'>Add Transaction</p>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label >Item</label>
                    <input type="text" value={item} onChange={(e) => setItem(e.target.value)} class="form-control mb-3" placeholder='item'></input>
                </div>
                <div className="form-group mb-3">
                    <label >Amount</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(parseInt(e.target.value))} class="form-control" placeholder='Amount'></input>
                </div>
                <div className="form-check mb-4">
                    <label class="form-check-label" >Income</label>
                    <input checked={spent} value={spent} onChange={(e) => setIncome(e.currentTarget.checked)} class="form-check-input" type="checkbox" ></input>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>

            </form>

        </div>
    )
}

export default AddTransaction
