import React, { useState } from 'react'
// state 사용이유 : 동적인 데이터 화면갱신을 위하여 리액트가 관리하는 것
const InputGrade2 = () => {
  //let text = ''

  const [grade, setGrade] = useState({
    name: '',
    kor: 0,
    eng: 0,
    math: 0,
  })

  const onChange = (event) => {
    const { name, value } = event.target

    // ...없으면 안돌아감
    setGrade({
      ...grade,
      [name]: value,
    })
  }

  //prettier-ignore
  return (
    <div>
      이름 : <input name = "name" onChange={onChange} value={grade.name}/><br/>
      국어 : <input name='kor' onChange={onChange} value={grade.kor}/><br/>
      수학 : <input name='math' onChange={onChange} value={grade.math}/><br/>
      영어 : <input name='eng' onChange={onChange} value={grade.eng}/><br/>
      <div>
        <div >총점 {Number(grade.kor) + Number(grade.eng ) + Number(grade.math)}</div>
        <b>평균 {(Number(grade.kor) + Number(grade.eng ) + Number(grade.math))/3.0} </b>
      </div>
    </div>
  )
}

export default InputGrade2
