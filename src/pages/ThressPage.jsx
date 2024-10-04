import React from 'react'
import Hello from '../components/Hello'
import Hello2 from '../components/Hello2'
import Hello3 from '../components/Hello3'
//<Hello name="홍길동">  객체임 그래서 파라미터를 만들어서 넘길수 있다.
const ThreePage = () => {
  return (
    //prettier-ignore
    <div>
      <Hello3 name="홍길동" color="red" isSpecial={true} isName={true}></Hello3>
      <Hello3 name="홍길동" color="red" isSpecial={false} isName={false}></Hello3>
    </div>
  )
}

export default ThreePage
