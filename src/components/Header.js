import { useContext } from 'react'
import MoneySplit from './MoneySplit'

const Header = ({ total }) => {
    const { balance, totalSpent, totalEarned } = total()
    const color = () => balance > 0 ? { color: 'green' } : { color: 'red' }
    return (
        <div>
            <h1 className='mb-3'>Expense Tracker</h1>
            <h4 className='mb-3'>Your Balance:
             <span style={color()}>${balance}</span></h4>
            <MoneySplit totalEarned={totalEarned} totalSpent={totalSpent} />
        </div>
    )
}

export default Header