import React, { useState } from 'react'
//  state 사용이유 : 동적인 데이터 화면갱신을 위하여 리액트가 관리하는 변수 화면에 나옴 가상돔 화면 깜빡임 없이 새로고침하기 위해서
const Counter = () => {
  const [number, setNumber] = useState(0)
  const onIncrease = () => {
    setNumber(number + 1)
  }
  const onDecrease = () => {
    setNumber(number - 1)
  }
  return (
    //prettier-ignore
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  )
}

export default Counter
