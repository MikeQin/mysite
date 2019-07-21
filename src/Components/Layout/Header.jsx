import React from "react";
import { Layout } from "antd";

const { Header } = Layout;

const MyHeader = () => {
  return (
    <Header style={{ background: "#fff", padding: 0 }}>
      <h1>Michael Qin's Photo Gallery</h1>
    </Header>
  );
};

export default MyHeader;
