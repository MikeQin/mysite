import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import MySider from "./Sider";
import MyFooter from "./Footer";
import MyContent from "./Content";
import MyHeader from "./Header";

const ResponsiveLayout = () => {
  return (
    <Layout>
      <MySider />
      <Layout>
        <MyHeader />
        <MyContent />
        <MyFooter />
      </Layout>
    </Layout>
  );
};

export default ResponsiveLayout;
