import React from 'react';
import { Tabs, Divider } from 'antd';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { selectUser } from 'app/Pages/PageLayout/selectors';

const { TabPane } = Tabs;

function Reports() {
  const user = useSelector(selectUser);
  return (
    <>
      <HelmetProvider>
        <Helmet titleTemplate="QDB Reports" defaultTitle="QDB Reports">
          <meta name="description" content="QDB application" />
        </Helmet>
      </HelmetProvider>
      <h1>Reports</h1>
      <Tabs defaultActiveKey="1">
        <TabPane tab="ACTIVE REPORTS" key="1">
          <h3>Welcome {user && user.name}</h3>
          <Divider />
          <p>User can see Active Reports here, routed to '/routes'</p>
        </TabPane>
      </Tabs>
    </>
  );
}

export default Reports;
