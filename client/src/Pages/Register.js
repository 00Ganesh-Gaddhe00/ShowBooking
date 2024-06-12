import React from 'react'
import { Button, Form, Input, message } from 'antd';
import {Link, useNavigate} from "react-router-dom"
import { RegisterUser } from '../APIcalls/users';


function Register() {
  const navigate = useNavigate();

  const onFinish = async(values) => {
    try{
       const response = await RegisterUser(values)
       if(response.success){
          message.success(response.message)
          navigate("/Login")
         }
         else{
          message.error(response.message)
         }
    }
    catch(err){
      message.error(err)
    }
  };

  return (
    <div className=' main'> 
    <div className='reg_cont'>
      <div className='reg_heading'>Register to BoOkSh0w</div>
    <Form
    
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    autoComplete="off"
    layout='vertical'
  >
    <Form.Item
      label="Name"
      name="name"
      rules={[
        {
          required: true,
          message: 'Please input your name!',
        },
      ]}
    >
      <Input placeholder='Enter Your Name'/>
    </Form.Item>
    <Form.Item
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your Email!',
        },
      ]}
    >
      <Input type='email' placeholder='Email'/>
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password size='small' placeholder='Password'/>
    </Form.Item>


    <Form.Item>
      <Button 
      style={{ fontSize: "15px", fontWeight: "600" }}
       type="primary" htmlType="submit" block>
        Sign Up
      </Button>
    </Form.Item>
  </Form>
  <div>
    <p>Already a user? <Link to="/Login">Login now</Link></p>
  </div>
  </div>
  </div>
  )
}

export default Register