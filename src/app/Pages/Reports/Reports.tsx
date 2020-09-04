import React from 'react';
import { Tabs, Divider } from 'antd';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { UserInfo as UserInterFace } from '../PageLayout/types';

const { TabPane } = Tabs;
interface Props {
  user: UserInterFace;
}

const Reports = Props => {
  const { user } = Props;
  return (
    <>
      <HelmetProvider>
        <Helmet titleTemplate="QDB Reports" defaultTitle="QDB Reports">
          <meta name="description" content="QDB application" />
        </Helmet>
      </HelmetProvider>
      <Tabs defaultActiveKey="1">
        <TabPane tab="ACTIVE REPORTS" key="1">
          <h3>Welcome {user && user.name}</h3>
          <Divider />
          <p>You can see Active Reports here</p>
        </TabPane>
        <TabPane tab="CALENDER" key="2">
          <h3>Welcome {user && user.name}</h3>
          <Divider />
          <p>You can see Calender Events here</p>
        </TabPane>
        <TabPane tab="LIVE STATS" key="3">
          <h3>Welcome {user && user.name}</h3>
          <Divider />
          <p>You can see Live Stats here</p>
        </TabPane>
      </Tabs>
    </>
  );
};

export default Reports;
