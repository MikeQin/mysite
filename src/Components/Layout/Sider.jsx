import React from "react";
import { Layout, Menu, Icon } from "antd";
import { Input } from "antd";

const { Sider } = Layout;
const { Search } = Input;

const MySider = () => {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <Search
        placeholder="Search..."
        style={{ width: 180, marginTop: 15, marginRight: 5, marginBottom: 10 }}
        onSearch={value => console.log(value)}
      />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Icon type="home" />
          <span className="nav-text">Home</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="picture" />
          <span className="nav-text">Photos</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="upload" />
          <span className="nav-text">Upload</span>
        </Menu.Item>
        <Menu.Item key="4">
          <Icon type="info-circle" />
          <span className="nav-text">About</span>
        </Menu.Item>
        <Menu.Item key="5">
          <Icon type="contacts" />
          <span className="nav-text">Contact</span>
        </Menu.Item>
        <Menu.Item key="6">
          <Icon type="logout" />
          <span className="nav-text">Logout</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default MySider;
