import React, { useState } from 'react'
// state 사용이유 : 동적인 데이터 화면갱신을 위하여 리액트가 관리하는 것
const Counter2 = () => {
  const [number, setNumber] = useState(0)
  const onIncrease = () => {
    setNumber(number + 2)
  }
  const onDecrease = () => {
    setNumber(number - 2)
  }
  return (
    //prettier-ignore
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+2</button>
      <button onClick={onDecrease}>-2

      </button>
    </div>
  )
}

export default Counter2
