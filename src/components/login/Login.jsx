import React from 'react'
import { 
  CaretDownFilled, UserOutlined,  RightOutlined,
  PoweroffOutlined, SettingOutlined, TrophyOutlined
} from '@ant-design/icons'
import { Popover, Button } from 'antd'

const Login = () => {
  const content = (
    <div className="flex-col w-48">
      <div className='flex justify-around cursor-pointer'>
        <div >
          <div className='flex justify-center item-center text-2xl font-bold'>12</div>
          <div>动态</div>
        </div>
        <div >
          <div className='flex justify-center item-center text-2xl font-bold'>12</div>
          <div>动态</div>
        </div>
        <div >
          <div className='flex justify-center item-center text-2xl font-bold'>12</div>
          <div>动态</div>
        </div>
      </div>
      <div className='flex justify-center my-1'>
        <Button><span className='text-sm'>签到</span></Button>
      </div>
      <div className='flex justify-between hover:bg-gray-200 cursor-pointer text-base px-2'> 
          <div className='flex justify-center items-center space-x-1'>
            <UserOutlined />
            <span>个人主页</span>
          </div>
          <RightOutlined className='place-self-center' />
      </div>
      <div className='flex justify-between hover:bg-gray-200 cursor-pointer text-base px-2'> 
          <div className='flex justify-center items-center space-x-1'>
            <TrophyOutlined />
            <span>听歌排行</span>
          </div>
          <RightOutlined className='place-self-center' />
      </div>
      <div className='flex justify-between hover:bg-gray-200 cursor-pointer text-base px-2'> 
          <div className='flex justify-center items-center space-x-1'>
            <SettingOutlined />
            <span>个人设置</span>
          </div>
          <RightOutlined className='place-self-center' />
      </div>
      <div className='flex justify-between hover:bg-gray-200 cursor-pointer text-base px-2'> 
          <div className='flex justify-center items-center space-x-1'>
            <PoweroffOutlined />
            <span>退出登录</span>
          </div>
      </div>
    </div>
  )
  return (
    <div className='flex space-x-2'>
        <img className='w-10 h-10 rounded-full cursor-pointer' src="http://p1.music.126.net/xqMAooN0WUEh61_ZV79MDQ==/109951163728081057.jpg" alt="" />
        <Popover content={content} trigger="click" className='place-self-center flex space-x-1 cursor-pointer'>
          <span>木顶顶顶</span>
          <div className='flex justify-center items-center'>
            <CaretDownFilled/>
          </div>
        </Popover>
    </div>
  )
}

export default Login