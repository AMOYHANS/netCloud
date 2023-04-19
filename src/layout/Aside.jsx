import React from 'react'
import { Menu } from 'antd'
import {
  SearchOutlined,
  VideoCameraOutlined,
  StarOutlined,
  LikeOutlined,
} from "@ant-design/icons"
import { NavLink as Link, useNavigate } from 'react-router-dom'

const items =  [
  { label: "发现音乐", key: "/findmusic/ee", icon: <SearchOutlined /> },
  { label: "推荐视频", key: "/recvideo", icon: <VideoCameraOutlined /> },
  { label: "每日推荐", key: "/receveryday", icon: <LikeOutlined /> },
  { label: "我的收藏", key: "/myfavorite", icon: <StarOutlined /> },
]

const Aside = () => {
  const navgate = useNavigate()

  return (
    <div className='overflow-y-scroll'>
        <Menu items={items} defaultSelectedKeys={['1']}  className="w-48" onClick={({key}) => {
          console.log(key)
          navgate(key)
        }}/>
    </div>
  )
}

export default Aside