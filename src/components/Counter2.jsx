import React, { useState } from 'react'
// state 사용이유 : 동적인 데이터 화면갱신을 위하여 리액트가 관리하는 것
const Counter2 = () => {
  let num = 0

  console.log('11111111111111111')
  const onIncrease = () => {
    num++
    console.log(num + '+++++++++++++')
    console.log('222222222222')
  }
  const onDecrease = () => {
    num--
    console.log(num + '---------------------')
    console.log('33333333333')
  }
  return (
    //prettier-ignore
    <div>
      <h1>{num}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  )
}

export default Counter2
