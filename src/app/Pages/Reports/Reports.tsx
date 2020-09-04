import React from 'react';
import { Tabs, Divider } from 'antd';
import { Helmet } from 'react-helmet-async';

const { TabPane } = Tabs;

const Reports = props => {
  return (
    <>
      <Helmet titleTemplate="QDB Reports" defaultTitle="QDB Reports">
        <meta name="description" content="QDB application" />
      </Helmet>
      <Tabs defaultActiveKey="1">
        <TabPane tab="ACTIVE REPORTS" key="1">
          <h3>Welcome {props.user && props.user.name}</h3>
          <Divider />
          <p>You can see Active Reports here</p>
        </TabPane>
        <TabPane tab="CALENDER" key="2">
          <h3>Welcome {props.user && props.user.name}</h3>
          <Divider />
          <p>You can see Calender Events here</p>
        </TabPane>
        <TabPane tab="LIVE STATS" key="3">
          <h3>Welcome {props.user && props.user.name}</h3>
          <Divider />
          <p>You can see Live Stats here</p>
        </TabPane>
      </Tabs>
    </>
  );
};

export default Reports;
