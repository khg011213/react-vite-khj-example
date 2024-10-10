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
import CounterPage from '../pages/CounterPage'
import InputPage from '../pages/InputPage'
import InputGradePage from '../pages/InputGradePage'
import UseRefPage from '../pages/UseRefPage'
import UseRefPage2 from '../pages/UseRefPage2'
import UserArrayPage from '../pages/UserArrayPage'
import UserCRUDPage from '../pages/UserCRUDPage'
import AxiosPage from '../pages/AxiosPage'
import AxiosClientPage from '../pages/AxiosClientPage'
import UseEffectPage from '../pages/UseEffectPage'
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
  {
    path: '/usestate',
    element: <CounterPage />,
    title: '유즈스테이트',
  },
  {
    path: '/input',
    element: <InputPage />,
    title: 'input 연습',
  },
  {
    path: '/inputGrade',
    element: <InputGradePage />,
    title: '성적표',
  },
  {
    path: '/useRef',
    element: <UseRefPage />,
    title: 'useRef 예제 1번',
  },
  {
    path: '/useRef2',
    element: <UseRefPage2 />,
    title: 'useRef 예제 2번',
  },
  {
    path: '/userpage',
    //element: <UserArrayPage />,
    element: <UserCRUDPage />,
    title: 'userpage',
  },
  {
    path: '/axiosget',
    element: <AxiosPage />,
    title: 'axiosget',
  },
  {
    path: '/axiosClient',
    element: <AxiosClientPage />,
    title: 'axiosClient',
  },
  {
    path: '/useEffect',
    element: <UseEffectPage />,
    title: 'useEffect',
  },
]

export default routes
