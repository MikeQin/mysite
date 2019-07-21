import React from "react";
import { Layout } from "antd";
const { Content } = Layout;

const MyContent = () => {
  return (
    <Content style={{ margin: "24px 16px 0" }}>
      <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
        <img src="photos/mam-tor-castleton-uk.jfif" alt="mam-tor-castleton-uk.jfif"/>
      </div>
    </Content>
  );
};

export default MyContent;
