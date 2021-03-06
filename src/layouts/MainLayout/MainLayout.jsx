import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'antd/lib/avatar';
import Menu from 'antd/lib/menu';
import Layout from 'antd/lib/layout';

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

const getDefaultSelectedKeysBasedOnRoute = pathname => {
  switch (pathname) {
    case '/about':
      return ['about'];
    case '/my-lists':
      return ['my-lists'];
    case '/':
      return ['home'];
    default:
      return [];
  }
};

const MainLayout = ({ children, location, history }) => (
  <Layout className="main-layout">
    <Header>
      <div className="logo" />
      <Menu
        className="menu"
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={getDefaultSelectedKeysBasedOnRoute(
          location.pathname
        )}
      >
        <Menu.Item key="home" onClick={() => history.push('/')}>
          Home
        </Menu.Item>
        <Menu.Item
          key="my-lists"
          onClick={() => history.push('/lists?userId=1')}
        >
          My Lists
        </Menu.Item>
        <Menu.Item key="about" onClick={() => history.push('/about')}>
          About
        </Menu.Item>

        <SubMenu
          key="sub1"
          className="float-right"
          title={
            <span>
              <Avatar
                className="avatar"
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              />
              <span>Abkreno</span>
            </span>
          }
        >
          <Menu.Item key="sub1_1" onClick={() => history.push('/profile')}>
            Profile
          </Menu.Item>
          <Menu.Item key="sub1_2">Logout</Menu.Item>
        </SubMenu>
      </Menu>
    </Header>
    <Content className="content-container">
      <div className="content">{children}</div>
    </Content>
    <Footer className="text-center">Stack Read ©2018 Created by Abkreno</Footer>
  </Layout>
);

MainLayout.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  children: PropTypes.array.isRequired,
};

export default MainLayout;
