import React, { useRef } from 'react'

//Dom 객체를 받아 올때
//useRef 로 특정 DOM 선택하기
//getElementById, querySelector 같은 DOM Selector 함수를 사용해서 DOM을 선택
//입력을 누르면 ref로 온다
//스크롤바 위치를 가져오거나 설정해야된다던지
//또는 포커스를 설정해줘야 된다던지 등 정말 다양한 상황이 있다
//추가적으로 VIdeo.js JWPlayer 같은 HTML5 video 관련 라이브러리
//또는 D3, chart.js 같은 그래프 관련 라이브러리 등의 외부 라이브러리를 사용해야 할
//때에도 특정 DOM 에다 적용하기 때문에 DOM 객제를 useRef() 로 가져옴

const UseRefEx2 = () => {
  const nameRef = useRef()

  const handleClick = () => {
    console.log(nameRef.current)
    console.log(nameRef.current.name)
    console.log(nameRef.current.value)
    if (nameRef.current.value.lenght < 1) {
      nameRef.current.focus()
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <input ref={nameRef} name="name" placeholder="이름을 입력하세요" />
      <button onClick={handleClick}>입력</button>
    </div>
  )
}

export default UseRefEx2
