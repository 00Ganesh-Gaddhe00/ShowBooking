import './App.css';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProtectedRoute from './components/ProtectedRoute';
import { useSelector } from 'react-redux';
import Admin from './Pages/Admin';
import Profile from './Pages/profile';
import SingleMovie from './Pages/SingleMovie';
import BookShow from './Pages/BookShow';
import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';
import { useState } from 'react';

//stylesheets
import './StyleSheets/register.css';

function App() {

  const { loading } = useSelector((state) => state.loader);

  return (
    <div>
       
       {loading && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
          }}
        >
          <Spin size="large"  indicator={<LoadingOutlined style={{ fontSize: 48 , color:'brown'}} spin/>}/>        
          </div>
      )}
        

      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path='/movie/:id' element={<ProtectedRoute><SingleMovie/></ProtectedRoute>}/>
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/admin' element={ <ProtectedRoute><Admin></Admin></ProtectedRoute>} />
          <Route path='/profile' element={ <ProtectedRoute><Profile></Profile></ProtectedRoute>} />
          <Route path="/book-show/:id" element={<ProtectedRoute><BookShow/></ProtectedRoute>}/>
         
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
