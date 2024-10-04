//rafc로 이거 만듬

// import React from 'react'

// const Routes = () => {
//   return <div></div>
// }

// export default Routes
import React, { Component } from 'react'
import HomePage from '../pages/HomePage'
import BoardPage from '../pages/boardPage'
import ProfilePage from '../pages/ProfilePage'
import PropsPage from '../pages/PropsPage'
import ThressPage from '../pages/ThressPage'
// Routes로 들어오면 그 경로에 맞게 결과를 보여줌

const routes = [
  { path: '/', element: <HomePage />, title: 'Home' },
  {
    path: '/board',
    element: <BoardPage />,
    title: 'Board',
  },
  {
    path: '/profile',
    element: <ProfilePage />,
    title: 'profile',
  },
  {
    path: '/props',
    element: <PropsPage />,
    title: '프롭스',
  },
  {
    path: '/three',
    element: <ThressPage />,
    title: '조건부랜더링',
  },
]

export default routes
