import React, { useState } from 'react'
// state 사용이유 : 동적인 데이터 화면갱신을 위하여 리액트가 관리하는 것
const Counter3 = () => {
  //let text = ''

  const [kor, setKor] = useState('')
  const [math, setMath] = useState('')
  const [eng, setEng] = useState('')
  const [total, setTotal] = useState('')
  const [avg, setAvg] = useState('')

  const onChange = (event) => {}

  //prettier-ignore
  return (
    <div>
      국어 <input onChange={onChange} value={kor}/>
      수학 <input onChange={onChange} value={math}/>
      영어 <input onChange={onChange} value={eng}/>
      <div>
        <b>총점 {total} </b>
        <b>평균 {avg} </b>
      </div>
    </div>
  )
}

export default Counter3
