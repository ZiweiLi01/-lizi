import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SideMenu from '../../components/SideMenu/SideMenu'
import TopHeader from '../../components/TopHeader/TopHeader'
import Home from './home/Home'
import NoPermission from './nopermission/NoPermission'
import Rightlist from './rightlist/Rightlist'
import Rolelist from './rolelist/Rolelist'
import Userlist from './userlist/Userlist'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import  { useState } from 'react';
const { Header, Sider, Content } = Layout;

export default function NewsSandBox() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
          <TopHeader></TopHeader>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Routes>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/user-manage/list" element={<Userlist></Userlist>}></Route>
            <Route path="/right-manage/role/list" element={<Rolelist></Rolelist>}></Route>
            <Route path="/right-manage/right/list" element={<Rightlist></Rightlist>}></Route>
            <Route path="*" element={<NoPermission></NoPermission>}></Route>
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
  // return (
  //   <div>
  //     <TopHeader></TopHeader>
  //     <SideMenu></SideMenu>
      // <Routes>
      //   <Route path="/home" element={<Home></Home>}></Route>
      //   <Route path="/user-manage/list" element={<Userlist></Userlist>}></Route>
      //   <Route path="/right-manage/role/list" element={<Rolelist></Rolelist>}></Route>
      //   <Route path="/right-manage/right/list" element={<Rightlist></Rightlist>}></Route>
      //   <Route path="*" element={<NoPermission></NoPermission>}></Route>
      // </Routes>
      
  //   </div>
  // )
}
