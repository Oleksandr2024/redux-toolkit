import {
  increment, 
  decrement, 
  reset, 
  incrementByAmount
} from './counterSlice'
import { useSelector,useDispatch } from 'react-redux'
import { useState } from 'react'


const Counter = () => {
  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState(0)

  const addValue = Number(incrementAmount) || 0

  const resetAll = () => {
    setIncrementAmount(0)
    dispatch(reset())
  }

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={()=>dispatch(increment())}>increment</button>
        <button onClick={()=>dispatch(decrement())}>decrement</button>
      <div>
        <input
           type="text"
           value={incrementAmount}
           onChange={(e)=>setIncrementAmount(e.target.value)} />
         <button onClick={()=>dispatch(incrementByAmount(addValue))}>incrementAmount</button>
         <button onClick={resetAll}>reset</button>  
      </div>
      </div>
    </section>
  )
}

export default Counter


























// import { useSelector, useDispatch } from "react-redux"
// import { decrement, increment } from "./counterSlice"

// const Counter = () => {
//   const count = useSelector(state => state.counter.count)
//   const dispatch = useDispatch()

//   return (
//     <section>
//         <p>{count}</p>
//         <div>
//             <button onClick={()=>dispatch(increment())}>+</button>
//             <button onClick={()=>dispatch(decrement())}>-</button>
//         </div>
//     </section>
//   )
// }

// export default Counter