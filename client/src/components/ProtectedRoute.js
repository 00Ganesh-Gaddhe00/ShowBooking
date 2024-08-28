import React from 'react'
import { GetCurrentUser } from '../APIcalls/users'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setUser } from '../redux/userSlice';
import { showLoading, hideLoading } from '../redux/loaderslice';
import { message, Layout, Menu } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import { Header } from "antd/es/layout/layout";

import {
  HomeOutlined,
  UserOutlined,
  ProfileOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

function ProtectedRoute({ children }) {
    const { user } = useSelector((state) => state.user)
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const getpresentUser = async () => {
        try {
          dispatch(showLoading());
          const response = await GetCurrentUser();
          // console.log(response)
            if(response.success){
              dispatch(setUser(response.data));
              
            }else {
              dispatch(setUser(null));
              message.error(response.message);

            }
          dispatch(hideLoading());

          } catch (error) {
          dispatch(hideLoading());
          dispatch(setUser(null));
          localStorage.removeItem("token");
          message.error(error.message);
        }
      };
    
    useEffect(() => {
        if (localStorage.getItem("token")) {
          getpresentUser(); // Get User Info from server
        } else {
          navigate("/login");
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      const navItems = [
        {
          key:1,
          label: (
            <Link to='/'>Home</Link>
          ),
          icon: <HomeOutlined />,
          style:{backgroundImage: "linear-gradient(to top, #922b21, #b03a2e)"},
          
        },
    
        {
          key:2,
          label: `${user ? user.name : " "}`,
          icon: <UserOutlined />,
          style:{backgroundImage: "linear-gradient(to top, #922b21, #b03a2e)"},

          children: [
            {
              key:21,
              label: (
                <span
                  onClick={() => {
                    user.isAdmin ? navigate("/admin") : navigate("/profile");
                  }}
                >
                  My Profile
                </span>
              ),
              icon: <ProfileOutlined />,
             // style:{backgroundImage: "linear-gradient(to top, #922b21, #b03a2e)"},

            },
            {
              key:22,
              label: (
                <Link to="/login" onClick={() => localStorage.removeItem("token")}>
                  Log out
                </Link>
              ),
              icon: <LogoutOutlined />,
             // style:{backgroundImage: "linear-gradient(to top, #922b21, #b03a2e)"},
              
            },
          ],
        },
      ];

    return (
      user && (
        <>
          <Layout>
            <Header
              className="d-flex justify-content-between"
              style={{
                position: "sticky",
                top: 0,
                zIndex: 1,
                width: "100%",
                display: "flex",
                alignItems: "center",
                backgroundImage: "linear-gradient(to top, #922b21, #b03a2e)",
               //backgroundColor:'#CD5C5C'
              }}
            >
              <h3 className="demo-logo text-white m-0" onClick={()=> navigate('/')}  style={{ color: "white", marginLeft:'4rem', cursor:'pointer' }}>
              BoOkSh0w
              </h3>
              <Menu theme="dark"  mode="horizontal" items={navItems } style={
                {
                backgroundImage: "linear-gradient(to top, #922b21, #b03a2e)",
                //backgroundColor:'#CD5C5C',
                   marginRight:'4rem'
                }
              } ></Menu>
            </Header>
  
            <div className='base' style={{ paddingInline:60, minHeight: 380 }}>
              {children}
            </div>
          </Layout>
        </>
      )    )
}



export default ProtectedRoute