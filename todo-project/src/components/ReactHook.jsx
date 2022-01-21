import {useState} from 'react'

export default function ReactHook() {

  const [count, setCount] = useState(1)

  const decrease = (() => {
    setCount(prevCount => prevCount - 1)
  })

  const increase = (() => {
    setCount(prevCount => prevCount + 1)
  })

  return (
    <div>
      <button onClick={decrease}>-</button>
      <span>{count}</span>
      <button onClick={increase}>+</button>
    </div>
  )
}
