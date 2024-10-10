import axios from 'axios'
import React, { useState } from 'react'
// https://jsonplaceholder.typicode.com/posts
const AxiosGet = () => {
  const [data, setData] = useState([])
  const getClick = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        //통신에 성공했을떄
        console.log(response.data)
        setData(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
      .then(() => {
        //tr catch finally에서 finally부분에 해당
        console.log('에러가 나든 안나든 무조건 실행')
      })
  }
  const postClick = () => {
    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        userId: 11111111,
        id: 101,
        body: 'test body',
        title: 'test title',
      })
      .then((response) => {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  //prettier-ignore
  return (
    <div>
      <h2> 엑시오스(axios) 연습</h2>
      <button onClick={getClick} >Get 방식</button>
      <button onClick={postClick} >Post 방식</button>

      <hr />
{/* key는 중복 제거를 위해서 */}
      { data.map((post,index)=>(
        <>
        <div key={post.id}> 
          <h3>타이틀{post.title}</h3>
          <div>유저 아이디{post.serId}, 아이디{post.id}</div>
          <div>바디{post.body}</div>
        </div>
        <hr />
        </>
      ))}
    </div>
  )
}

export default AxiosGet
