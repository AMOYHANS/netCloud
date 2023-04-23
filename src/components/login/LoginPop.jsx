import {CloseOutlined, QrcodeOutlined} from '@ant-design/icons'
import {Form, Input, Button} from 'antd'
import { useState } from 'react'

const LoginPop = ({setIsLogin}) => {
  const [loginType, setLoginType] = useState(0)
  return (
    <div 
    className='z-10 absolute top-24 left-1/2 bg-white rounded-xl flex-col justify-center items-center text-black pl-8 pr-8' 
    style={{width: '400px', minHeight: '520px', transform: 'translate(-50%)', border: '1px solid #b3a9a9'}}>
      <div className='w-full text-black text-right text-2xl relative left-6'>
        <CloseOutlined onClick={() => setIsLogin(false)}/>
      </div>
      {/* 手机号登录 */}
      {
        loginType === 0 && (
        <div className="text-center">
          <h1 className='text-xl font-bold'>手机号登录</h1>
          <div className='iconfont icon-tel text-8xl p-6'></div>
          <Form labelCol={{span: 4}}  style={{maxWidth: 370}}>
            <Form.Item label="手机号" name="phone">
              <Input size="large" placeholder='请输入手机号'/>
            </Form.Item>
            <Form.Item label="密码" name="password">
              <Input size="large" placeholder='密码为8~20位，须包含字母数字'/>
            </Form.Item>
            <div className='flex justify-between space-x-2 ant-sm:flex-col ant-sm:space-x-0'>
              <Button size="large" htmlType='submit' className='w-full ant-sm:mb-6'>提交</Button>
              <Button size="large" className='w-full'>注册</Button>
            </div>
          </Form>
          <div 
            className='flex justify-center items-center pt-5 space-x-2 cursor-pointer' 
            onClick={() => setLoginType(1)}>
            <QrcodeOutlined />
            <span>扫码登录</span>
          </div>
        </div>
        )
      }
      {
        loginType === 1 && (
        <div className="text-center">
          <h1 className='text-xl font-bold'>扫码登录</h1>
          <div className='flex justify-center items-center'>
            <img className='w-2/3' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAYAAAA9zQYyAAAAAklEQVR4AewaftIAAAeGSURBVO3BQW4kwZEAQfcC//9l3znGKYFCN7lSKszsH9a6xMNaF3lY6yIPa13kYa2LPKx1kYe1LvKw1kUe1rrIw1oXeVjrIg9rXeRhrYs8rHWRh7Uu8rDWRX74kMpfqnhDZao4UflExSdUPlExqUwVb6j8pYpPPKx1kYe1LvKw1kV++LKKb1L5RMWkclJxovJNKlPFpDJVTCqTyonKVPFGxTepfNPDWhd5WOsiD2td5IdfpvJGxRsqb1ScqEwVJxWfqJhUTlSmijdUvknljYrf9LDWRR7WusjDWhf54XIVk8pJxaQyVUwqJxVvVEwqU8WkclIxVUwqU8V/s4e1LvKw1kUe1rrID5epmFSmim+qmFROVN6omFSmihOVqWKquMnDWhd5WOsiD2td5IdfVvGXVKaKE5U3VKaKNyomlaliUpkqTlSmiknlpOKNiv8kD2td5GGtizysdZEfvkzl/1PFpDJVnFRMKlPFpDJVTCpTxTepTBWTylQxqbyh8p/sYa2LPKx1kYe1LmL/8F9M5aTiROWNihOVNyomlTcq3lCZKm7ysNZFHta6yMNaF/nhQypTxaTyTRVTxYnKScWk8obKVHGiclJxonKiMlWcqEwVk8o3Vfymh7Uu8rDWRR7Wuoj9wwdUPlHxCZWpYlKZKiaVqeJEZaqYVE4qJpWpYlJ5o+I3qUwVJyonFd/0sNZFHta6yMNaF7F/+EUqJxWTyl+qmFSmiknlpGJSOamYVKaKN1SmikllqphUpopvUjmp+MTDWhd5WOsiD2tdxP7hAyonFZPKScUnVKaKSeWk4kRlqnhD5RMVb6j8popJZao4UZkqPvGw1kUe1rrIw1oX+eGXqUwVJyp/qWJS+YTKGxUnKicqJxWTyicqJpWpYlL5Sw9rXeRhrYs8rHWRH/6fqUwVJypTxRsVk8pJxYnKVHGiMqmcVEwqU8WkclJxojJVTCpTxUnFX3pY6yIPa13kYa2L/PBlFZPKJ1SmiknlpOKk4kTlpOJEZaqYVKaKk4pJZaqYVE4qpopJ5UTlpOJEZar4xMNaF3lY6yIPa13E/uE/iMpUMamcVLyhclIxqUwVn1A5qfiEylQxqUwVJyonFScqJxWfeFjrIg9rXeRhrYv88CGVqWJSOak4UXlDZar4poo3VKaKk4pJ5aRiUnmjYlL5JpWpYlL5poe1LvKw1kUe1rrID//hKk5UTlS+SeWNipOKk4pJZVI5qThRmSo+oTJVTCpTxTc9rHWRh7Uu8rDWRewfPqDyiYoTlaniRGWqeENlqvhNKlPFpDJVnKi8UTGpvFFxovJGxSce1rrIw1oXeVjrIj98WcWJyqRyUvEJlaliUvmEylTxRsWkMlVMKicVJyrfpDJVTBUnKt/0sNZFHta6yMNaF7F/+IDKVPGGylQxqfylijdU3qj4JpU3Kk5UTiomlTcqftPDWhd5WOsiD2tdxP7hi1SmikllqphUpopPqEwVv0llqphUvqnim1SmijdUpopJZar4poe1LvKw1kUe1rrIDx9S+aaKSWWqOFGZKk5UTiomlU9UvKEyVbyh8gmVb6qYVKaKTzysdZGHtS7ysNZFfvgPozJVvFExqUwVJxWTyidUpopJ5aRiUpkqTireUPlExYnKb3pY6yIPa13kYa2L2D98kcpU8QmVk4pJZaqYVE4qTlROKr5J5RMVk8onKiaVqWJSmSomlaniEw9rXeRhrYs8rHUR+4cPqJxUvKEyVbyhclIxqUwVk8pJxYnKVDGpTBUnKlPFicpUcbOHtS7ysNZFHta6yA9fVnGiMlWcqEwVn1CZKj6hMlWcqEwVJypTxaRyUjGpnFRMKicVk8onKj7xsNZFHta6yMNaF/nhl6lMFW9UnKhMFZ9QeaPipGJSmVQ+UXGi8obKVHGiclJxovJND2td5GGtizysdZEfflnFicpUMamcVEwqU8UbFScqk8pJxUnFicqJyhsVk8qJyhsVk8pUMVV808NaF3lY6yIPa13E/uG/mMpfqnhD5RMVk8obFZPKScUbKicVk8pU8U0Pa13kYa2LPKx1kR8+pPKXKqaKSeWk4kRlqphUpoo3KiaVqeKk4hMVk8qJylRxUjGpTBWTylTxiYe1LvKw1kUe1rrID19W8U0qJyonFd9UMalMFVPFpHKiMlV8QmWqeKPiDZWp4i89rHWRh7Uu8rDWRX74ZSpvVPwmlZOKE5Wp4kTlpOINlTcqJpUTlU9UTCp/6WGtizysdZGHtS7yw/+4iknlDZWpYqp4Q+WNikllUpkqTlROKiaVSeWkYlL5poe1LvKw1kUe1rrID/9jKiaVqeITKicVJxW/SeWk4o2KSWWqmFR+08NaF3lY6yIPa13kh19W8ZsqJpVJZao4UZkqTlSmiknlROWbKiaVT6hMFZPKGxWTyjc9rHWRh7Uu8rDWRX74MpW/pDJVTConFScqU8WJyhsVJypTxaQyqbxRMalMFW9UTCp/6WGtizysdZGHtS5i/7DWJR7WusjDWhd5WOsiD2td5GGtizysdZGHtS7ysNZFHta6yMNaF3lY6yIPa13kYa2LPKx1kYe1LvJ/hBnpg3ImCmMAAAAASUVORK5CYII=" alt="" />
          </div>
          <p>二维码已失效，<span >点击刷新</span></p>
          <p>使用<span style={{color: "#5091ca"}}>网易云音乐APP</span>扫码登陆</p>
          <div className='mt-12'>
            <span className='cursor-pointer' onClick={() => setLoginType(0)}>
              <i class="iconfont icon-tel"></i>
              <span> 手机号登录</span>
            </span>
          </div>
          <div className='mt-12 cursor-pointer' onClick={() => setLoginType(2)}>
            还没有账号，去注册
          </div>
        </div>
        )
      }
      {
        loginType === 2 && (
        <div className="text-center">
          <h1 className='text-xl font-bold'>注册新用户</h1>
          <Form labelCol={{span: 5}} className='ant-sm:mt-4 ant-sm:space-y-10'>
            <Form.Item label="手机号" name="phone">
              <Input  placeholder='请输入手机号'/>
            </Form.Item>
            <Form.Item label="密码" name="password" >
              <Input  placeholder='密码为8~20位，须包含字母数字'/>
            </Form.Item>
            <Form.Item label="确认密码" name="password">
              <Input  placeholder='请确认密码'/>
            </Form.Item>
            <Form.Item label="昵称" name="password">
              <Input  placeholder='请输入昵称'/>
            </Form.Item>
            <Form.Item label="验证码" name="password">
              <Input  placeholder='请输入验证码'/>
            </Form.Item>
            <div className='flex justify-between space-x-2 pb-4'>
              <Button size="large" htmlType='submit' className='w-full ant-sm:mb-6'>注册</Button>
              <Button size="large" className='w-full' onClick={() => setLoginType(0)}>返回登录</Button>
            </div>
          </Form>
        </div>
        )
      }

    </div>
  )
}

export default LoginPop