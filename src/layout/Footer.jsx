import React, { useState } from 'react'
import {StepBackwardOutlined, StepForwardOutlined, OrderedListOutlined} from '@ant-design/icons'
import {Tooltip } from 'antd'
import Progress from '../components/common/Progress'

const Footer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMute, setIsMute] = useState(false)
  const [playMode, setPlayMode] = useState(0)
  const getPlayMode = () => {
    return [
      {content: '顺序播放', type: 0, class: 'iconfont icon-orderplay', next: 1},
      {content: '随机播放', type: 1, class: 'iconfont icon-random', next: 2},
      {content: '单曲循环', type: 2, class: 'iconfont icon-danqu', next: 0},
    ]
  }
  return (
    <div className='w-full justify-between px-2 flex space-x-0 sm:space-x-1' style={{height: '4.5rem', borderTop: '1px solid #dfd3d3', minWidth: '500px'}}>
      <audio 
      src=""

      ></audio>
      <div className='flex justify-between items-center space-x-4'>
        <div className='iconfont icon-yinleyanzou text-4xl'></div>
        <div className="hidden sm:block" style={{minWidth: '30px'}}>暂无音乐</div>
        <div className='text-2xl w-32 place-self-center space-x-0 sm:space-x-1 text-white' style={{minWidth: '120px'}}>
          <StepBackwardOutlined className='rounded-full p-1 bg-red-500' />
          {
          !isPlaying &&
          <span className='bg-red-500 rounded-full px-3 py-2'>
            <span class="iconfont icon-play text-xl" onClick={() => setIsPlaying(true)}></span>
          </span>
          }
          {
          isPlaying &&
          <span className='bg-red-500 rounded-full px-3 py-2'>
            <span class="iconfont icon-pause text-xl" onClick={() => setIsPlaying(false)}></span>
          </span>
          }
          <StepForwardOutlined className='rounded-full p-1 bg-red-500'/>
        </div>
      </div>
      <div className='flex justify-center items-center space-x-2 w-3/5'>
        <span>{`00:00`}</span>
        <Progress className='flex-grow' />
        <span>{`00:00`}</span>
      </div>
      <div className="place-self-center flex space-x-0 sm:space-x-4 text-xl">
        {
          getPlayMode().filter(item => item.type === playMode).map(item => {
            return (
              <Tooltip title={item.content} className='w-6' key={item.content}>
                <span className={item.class + ' text-xl'} onClick={() => setPlayMode(item.next)}></span>
              </Tooltip>
            )
          })
        }
        <Tooltip title="歌词">
          <span>词</span>
        </Tooltip>
      {
        !isMute ? <i class="iconfont icon-jingyin text-xl font-semibold" onClick={() => setIsMute(true)} /> :
			<i class="iconfont icon-laba text-xl font-semibold" onClick={() => setIsMute(false)}/>
      }
        <Progress style={{width: '120px'}} className='flex-grow' showInfo={false} />
        <Tooltip title='播放列表' placement="topRight" className='text-2xl cursor-pointer'>
          <OrderedListOutlined />
        </Tooltip>
      </div>
    </div>
  )
}

export default Footer