import React from 'react'
import {SearchOutlined} from '@ant-design/icons'
import { Popover } from 'antd'
import { Input, Tag } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

const SearchInput = () => {
  const content = (
    <div className='space-y-2 overflow-y-scroll' style={{maxHeight: "300px"}}>
        <div className="w-60 px-2">
            <div className="flex justify-between">
                <span className='font-bold text-base'>搜索历史</span>
                <span className='flex justify-center items-center text-sm cursor-pointer'>
                    <DeleteOutlined/>
                    清空
                </span>
            </div>
            <div className='cursor-pointer'><Tag closable>ddd</Tag></div>
        </div>
        {/* <Divider/> */}
        <div>
            <h1 className='font-bold text-base px-2'>热搜榜</h1>
            <ul className='space-y-2'>
                <li className='flex space-x-5 hover:bg-gray-200 p-2'>
                    <div className='place-self-center text-base font-bold'>1</div>
                    <div>
                        <div className='space-x-3'>
                            <span>Tag</span>
                            <span>
                                213123
                            </span>
                            <span>dd</span>
                        </div>
                        <h1>dsjkafhdjfkshdjskfhdjskf</h1>
                    </div>
                </li>

            </ul>
        </div>
    </div>
  )

  return (
    <Popover content={content} trigger="click">
        <Input addonAfter={<SearchOutlined className='text-white'/>} placeholder=''/>
    </Popover>
  )
}

export default SearchInput