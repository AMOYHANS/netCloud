import React from 'react'
import Aside from './Aside'
import { Route, Routes } from 'react-router-dom'
import First from '../pages/First'
import RecvMV from '../pages/recvideo/RecvMV'

const Main = () => {
  return (
    <div className='flex' style={{height: 'calc(100vh - 8.25rem)'}}>
        <Aside/>
          <Routes className='overflow-x-scroll'>
            <Route path='findmusic'>
              <Route path='ee' element={<RecvMV/>}></Route>
            </Route>
            {/* <Route path='/*' element={<First/>}/>
            <Route path='/*' element={<First/>}/>
            <Route path='/*' element={<First/>}/> */}
          </Routes>
    </div>
  )
}

export default Main