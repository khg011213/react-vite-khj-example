import React from 'react'
// jsx안에서는 js if문을 못씀 그래서 3항 연산자를 씀
// for문을 못씀 그래서 map 또는 filter함수를 써서 해결
const Hello3 = ({ color, name, isSpecial, isName }) => {
  return (
    //prettier-ignore
    <div style={{color: color}}>
      안녕하세요{isName ? name : null}<br/>
      색상 : {color}<br/>
      {isSpecial ? <b>*</b> : null}
      
    </div>
  )
}

export default Hello3
