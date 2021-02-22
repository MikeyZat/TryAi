import React from 'react';
import { Layout } from 'antd';
import LeftMenu from '../LeftMenu/LeftMenu';
import ContentSwitcher from '../ContentSwitcher/ContentSwitcher';
import PageBreadcrumb from '../PageBreadcrumb/PageBreadcrumb';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './layout.less';

const MainLayout = () => (
  <Layout className="page-container">
    <Header />
    <Layout hasSider>
      <Layout.Sider theme="light" width={220} collapsible trigger={null} breakpoint="sm">
        <LeftMenu />
      </Layout.Sider>
      <Layout className="content-container">
        <div className="breadcrumb-container">
          <PageBreadcrumb />
        </div>
        <Layout.Content className="main-content">
          <ContentSwitcher />
        </Layout.Content>
      </Layout>
    </Layout>
    <Footer />
  </Layout>
);

export default MainLayout;
