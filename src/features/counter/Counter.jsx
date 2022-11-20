import { 
    increment, 
    decrement, 
    reset, 
    changeAmount } from "./counterSlice"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"


const Counter = () => {

    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()
    const [amount, setAmount] = useState(0)
  
    console.log(count)
    const onAmountChange = (e) => setAmount(e.target.value)
    const numAmount = Number(amount) || 0
    const isNumber = Number(numAmount)

  return (
    <div>
        <h4>Counter: {count}</h4>
        <button onClick={()=>dispatch(increment())}>increment</button>
        <button onClick={()=>dispatch(decrement())}>decrement</button>
        <form>
            <input
                 type="amount"
                 name="amount"
                 value={amount}
                 onChange={onAmountChange} />
        </form>
        <button
             onClick={()=>dispatch(changeAmount(numAmount))}
             disabled={!isNumber}>change on amount</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Counter