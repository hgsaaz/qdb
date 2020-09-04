import React from 'react';
import { Tabs, Space, Divider } from 'antd';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { UserInfo } from './styles';
import { UserInfo as UserInterFace } from '../PageLayout/types';

const { TabPane } = Tabs;

interface Props {
  user: UserInterFace;
}

const Dashboard = Props => {
  const { user } = Props;
  const { address, company } = user || { address: null, company: null };

  return (
    <>
      <HelmetProvider>
        <Helmet titleTemplate="QDB Dashboard" defaultTitle="QDB Dashboard">
          <meta name="description" content="QDB application" />
        </Helmet>
      </HelmetProvider>
      <Tabs defaultActiveKey="1">
        <TabPane tab="OVERVIEW" key="1">
          <Space size="small" direction="vertical">
            <h3>Personal Details</h3>
            <UserInfo>Name: {user && user.name}</UserInfo>
            <UserInfo>Phone: {user && user.phone}</UserInfo>
            <UserInfo>Email: {user && user.email}</UserInfo>
            <UserInfo>Website: {user && user.website}</UserInfo>
            {address && (
              <>
                <Divider />
                <h3>Address</h3>
                <UserInfo>City: {address.city}</UserInfo>
                <UserInfo>Street: {address.street}</UserInfo>
                <UserInfo>Zipcode: {address.zipcode}</UserInfo>
              </>
            )}
            {company && (
              <>
                <Divider />
                <h3>Company</h3>
                <UserInfo>{user && user.company.name}</UserInfo>
                <UserInfo>{user && user.company.catchPhrase}</UserInfo>
              </>
            )}
          </Space>
        </TabPane>
        <TabPane tab="EXPENSE" key="2">
          <h3>Welcome {user && user.name}</h3>
          <Divider />
          <p>You can see Expense Reports here</p>
        </TabPane>
      </Tabs>
    </>
  );
};

export default Dashboard;
