import React from 'react'
import Hello from '../components/Hello'
import Hello2 from '../components/Hello2'
//<Hello name="홍길동">  객체임 그래서 파라미터를 만들어서 넘길수 있다.
const PropsPage = () => {
  return (
    //prettier-ignore
    <>
      <Hello name="홍길동" color="red" age="20"> </Hello>

      <Hello2 name="홍길순" color="blue" age="20"> </Hello2>
    </>
  )
}

export default PropsPage
