import axios from 'axios'
import React, { useState } from 'react'
// https://jsonplaceholder.typicode.com/posts
const AxiosClient = () => {
  const [data, setData] = useState([])
  const getClick = () => {
    axios
      .get('https://sample.bmaster.kro.kr/contacts?pageno=3&pagesize=10')
      .then((response) => {
        //통신에 성공했을떄
        console.log(response)
        setData(response.data.contacts)
      })
      .catch(function (error) {
        console.log(error)
      })
      .then(() => {
        //tr catch finally에서 finally부분에 해당
        console.log('에러가 나든 안나든 무조건 실행')
      })
  }

  const delButton = (no) => {
    setData((prevDate) => prevDate.filter((post) => post.no !== post.no))
    console.log('삭제')
  }

  //prettier-ignore
  return (
    <div>
      <h2> 클라이언트 테이블 받아오기 연습</h2>
      <button onClick={getClick} > 클라이언트 데이터</button>
      { data.map((post)=>(
        <>
        <div key={post.no}> 
          <h3>이름{post.name}</h3>
          <div>전화번호{post.tel}, 주소{post.address}</div>
          <div>사진: <img src={post.photo} alt="" /></div>
          </div>
          <button onClick={delButton}>삭제</button>
        <hr />
        </>
      ))}
    </div>
  )
}

export default AxiosClient
