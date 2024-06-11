import React from 'react'
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';


function Login() {


    const onFinish = (values) => {
        console.log('Success:', values);
      };



  

  return (
    <div className=' main'> 
    <div className='reg_cont'>
      <div className='reg_heading'>Welcome back to BoOkSh0w</div>
    <Form
    
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    autoComplete="off"
    layout='vertical'
  >
   
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
    <p>Not registered yet? <Link to="/Register">Register now</Link></p>
  </div>
  </div>
  </div>
  )
}

export default Login