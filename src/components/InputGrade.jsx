import React, { useState } from 'react'
// state 사용이유 : 동적인 데이터 화면갱신을 위하여 리액트가 관리하는 것
const InputGrade = () => {
  //let text = ''

  const [name, setName] = useState('')
  const [kor, setKor] = useState(0)
  const [math, setMath] = useState(0)
  const [eng, setEng] = useState(0)

  const onNameChange = (event) => {
    setName(event.target.value)
  }

  const onkorChange = (event) => {
    setKor(event.target.value)
  }

  const onmathChange = (event) => {
    setMath(event.target.value)
  }

  const onengChange = (event) => {
    setEng(event.target.value)
  }

  //prettier-ignore
  return (
    <div>
      이름 : <input name = "name" onChange={onNameChange} value={name}/><br/>
      국어 : <input name='kor' onChange={onkorChange} value={kor}/><br/>
      수학 : <input name='math' onChange={onmathChange} value={math}/><br/>
      영어 : <input name='eng' onChange={onengChange} value={eng}/><br/>
      <div>
        <div >총점 {Number(kor) + Number(eng ) + Number(math)}</div>
        <b>평균 {(Number(kor) + Number(eng ) + Number(math))/3.0} </b>
      </div>
    </div>
  )
}

export default InputGrade
