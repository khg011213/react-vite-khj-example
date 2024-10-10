import React, { useEffect } from 'react'
import { useState } from 'react'

// 정리하면 아래와 같다.

// useEffect(() => {
//   // 매 렌더링마다 실행
// });

// useEffect(() => {
//   // 컴포넌트가 처음 렌더링된 실행
// }, []);

// useEffect(() => {
//   // 컴포넌트가 처음 렌더링된 이후 실행
//   // a나 b가 변경되어 컴포넌트가 재렌더링된 이후 실행
// }, [a, b]);

const UseEffectExample = () => {
  const [firstCount, setFristCount] = useState(0)
  const [secondCount, setSecondCount] = useState(0)

  useEffect(() => {
    //매 렌더링마다 실행 (다른거 다 그리고 나서)
    console.log(`매랜더링 마다 실행 ${new Date()}`)
  })
  useEffect(() => {
    // 컴포넌트가 처음 렌더링된 실행
    console.log(`컴포넌트가 처음 렌더링된 실행 ${new Date()}`)
  }, [])
  useEffect(() => {
    // 컴포넌트가 처음 렌더링된 이후 실행
    // a나 b가 변경되어 컴포넌트가 재렌더링된 이후 실행
    console.log(`퍼스트 컴포넌트 변경 ${new Date()}`)
    console.log(`세컨드 컴포넌트 변경 ${new Date()}`)
  }, [firstCount, secondCount])

  const firstCountHandler = () => {
    setFristCount((s) => s + 1)
  }

  const secondCountHandler = () => {
    setSecondCount((s) => s + 1)
  }

  return (
    <div className="App">
      <h1>{firstCount}</h1>
      <button onClick={firstCountHandler}>카운터 증가</button>
      <h1>{secondCount}</h1>
      <button onClick={secondCountHandler}>카운터 증가</button>
    </div>
  )
}

export default UseEffectExample
