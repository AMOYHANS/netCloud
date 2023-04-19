import React from 'react'
import { Popover } from 'antd'
import themeList from './themeList'

const content = (
    <div className='w-40 h-40 flex flex-wrap justify-around px-1'>
       {
        themeList.map(item => (
            <div key={item.title} className='flex-col px-2 item-center justify-center text-center'>
                <div className='w-8 h-8 ' style={{backgroundColor: `${item.themeColor}`}}>
                    <span className='iconfont icon-duihao text-white'></span>
                </div>
                <span>{item.title}</span>
            </div>
        ))
       } 
    </div>
)
const ThemePicker = () => {
    return (
    <Popover content={content} trigger='click'>
        <span className='iconfont icon-pifu'></span>
    </Popover>
  )
}

export default ThemePicker