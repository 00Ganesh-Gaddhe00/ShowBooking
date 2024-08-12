import React from 'react'
import { GetCurrentUser } from '../APIcalls/users'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setUser } from '../redux/userSlice';
import { ShowLoading, HideLoading } from '../redux/loaderslice';
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
          // dispatch(ShowLoading());
           console.log(localStorage.getItem('token'))
          const response = await GetCurrentUser();
          // console.log(response)
          // dispatch(HideLoading());
            
            dispatch(setUser(response.data));
          
        } catch (error) {
        //   dispatch(HideLoading());
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
          label: "Home",
          icon: <HomeOutlined />,
        },
    
        {
          key:2,
          label: `${user ? user.name : " "}`,
          icon: <UserOutlined />,
    
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
            },
            {
              key:22,
              label: (
                <Link to="/login" onClick={() => localStorage.removeItem("token")}>
                  Log out
                </Link>
              ),
              icon: <LogoutOutlined />,
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
              }}
            >
              <h3 className="demo-logo text-white m-0" style={{ color: "white" }}>
              BoOkSh0w
              </h3>
              <Menu theme="dark" mode="horizontal" items={navItems }></Menu>
            </Header>
  
            <div style={{ padding: 24, minHeight: 380, background: "#fff" }}>
              {children}
            </div>
          </Layout>
        </>
      )    )
}



export default ProtectedRoute