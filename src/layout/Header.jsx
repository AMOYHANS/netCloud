import React, { useState } from 'react'
import SearchInput from '../components/common/SearchInput'
import ThemePicker from '../components/common/ThemePicker'
import Login from '../components/login/Login'
import { requestFullScreen, exitFullscreen } from "../common/utils.js";
import {RightOutlined, LeftOutlined} from '@ant-design/icons'


const Header = () => {
    const [isFullScreen, setIsFullScreen] = useState(false)
  return (
    <div className='w-full h-12 py-2.5 flex justify-evenly bg-red-600'>
        {/* 左侧 */}
        <div className='flex w-full text-white'>
            {/* logo */}
            <div className='flex space-x-3 px-6'>
                <div className='place-self-center'>
                    <span className='iconfont icon-yinleyanzou text-4xl font-semibold'></span>
                </div>
                <div className='text-xl place-self-center'>NetCloud</div>
            </div>
            {/* 操作栏 */}
            <div className='place-self-center space-x-2 flex'>
                <LeftOutlined className='cursor-pointer rounded-full bg-gray-200 p-2 bg-opacity-10'/>
                <RightOutlined className='cursor-pointer rounded-full bg-gray-200 p-2 bg-opacity-10'/>
            </div>
            {/* 搜索 */}
            <div className='place-self-center ml-4 w-1/2'>
                <SearchInput/>
            </div>
        </div>
        {/* 右侧 */}
        <div className='flex w-full place-self-center justify-end px-6 space-x-4 text-white'>
            <div className="">
                <Login/>
            </div>
            {/* 换肤 */}
            <div className="place-self-center cursor-pointer">
                <ThemePicker/>
            </div>
            {/* 全屏 */}
            <div className="place-self-center cursor-pointer">
                {!isFullScreen && <span className='iconfont icon-quanping' onClick={() => {requestFullScreen(); setIsFullScreen(true)}}></span>}
                {isFullScreen && <span className='iconfont icon-cancel-full-screen' onClick={() => {exitFullscreen(); setIsFullScreen(false)}}></span>}
            </div>
        </div>
    </div>
  )
}

export default Header