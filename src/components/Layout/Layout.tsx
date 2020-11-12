import React from 'react';
import { Layout } from 'antd';
import Navbar from '../Navigation/Navbar';
import PageContent from '../Content/Content';
import PageBreadcrumb from '../PageBreadcrumb/PageBreadcrumb';
import Header from '../Header/Header';

const MainLayout = () => (
  <Layout>
    <Header />
    <Layout>
      <Layout.Sider width={200}>
        <Navbar />
      </Layout.Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <PageBreadcrumb />
        <PageContent />
      </Layout>
    </Layout>
  </Layout>
);

export default MainLayout;
