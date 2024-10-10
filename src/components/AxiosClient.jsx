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

  const removeClick = (event) => {
    let no = event.target.name
    setData(data.filter((client) => client.no != no))
    console.log('삭제')
  }

  //prettier-ignore
  return (
    <div>
      <h2> 클라이언트 테이블 받아오기 연습</h2>
      <button onClick={getClick} > 클라이언트 데이터</button>

    <hr />
    <table id='list-table' border={1}>
      <tr>
        <td>번호</td>
        <td>이름</td>
        <td>전화번호</td>
        <td>주소</td>
        <td>사진</td>
        <td>삭제</td>
      </tr>
      { data.map((post)=>(
        <>
          <tr  key={post.no}>
            <td>{post.no}</td> 
            <td>{post.name}</td>
            <td>{post.tel}</td>
            <td>{post.address}</td>
            <td> <img src={post.photo} alt="" /></td>
            <input 
              name={post.no}
              id = {post.no}
              type='button'
              value="삭제"
              onClick={removeClick}
            />
          </tr>
        </>
      ))}
    </table>
      
    </div>
  )
}

export default AxiosClient
