import React from 'react';
import { Layout } from 'antd';
import Navbar from '../Navigation/Navbar';
import ContentSwitcher from '../ContentSwitcher/ContentSwitcher';
import PageBreadcrumb from '../PageBreadcrumb/PageBreadcrumb';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MainLayout = () => (
  <Layout style={{ minHeight: '100vh' }}>
    <Header />
    <Layout hasSider>
      <Layout.Sider theme="light" width={220} collapsible trigger={null} breakpoint="sm">
        <Navbar />
      </Layout.Sider>
      <Layout style={{ padding: '16px 16px 0 16px' }}>
        <div style={{ padding: '0 8px 16px 8px' }}>
          <PageBreadcrumb />
        </div>
        <Layout.Content
          style={{
            padding: 24,
            minHeight: 280,
            minWidth: 140,
            background: '#fff',
          }}
        >
          <ContentSwitcher />
        </Layout.Content>
      </Layout>
    </Layout>
    <Footer />
  </Layout>
);

export default MainLayout;
