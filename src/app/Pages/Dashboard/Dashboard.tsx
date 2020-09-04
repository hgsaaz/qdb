import React from 'react';
import { Tabs, Space, Divider } from 'antd';
import { Helmet } from 'react-helmet-async';
import { UserInfo } from './styles';

const { TabPane } = Tabs;

const Dashboard = props => {
  return (
    <>
      <Helmet titleTemplate="QDB Dashboard" defaultTitle="QDB Dashboard">
        <meta name="description" content="QDB application" />
      </Helmet>
      <Tabs defaultActiveKey="1">
        <TabPane tab="OVERVIEW" key="1">
          <Space size="small" direction="vertical">
            <h3>Personal Details</h3>
            <UserInfo>Name: {props.user && props.user.name}</UserInfo>
            <UserInfo>Phone: {props.user && props.user.phone}</UserInfo>
            <UserInfo>Email: {props.user && props.user.email}</UserInfo>
            <UserInfo>Website: {props.user && props.user.website}</UserInfo>
            <Divider />
            <h3>Address</h3>
            <UserInfo>City: {props.user && props.user.address.city}</UserInfo>
            <UserInfo>
              Street: {props.user && props.user.address.street}
            </UserInfo>
            <UserInfo>
              Zipcode: {props.user && props.user.address.zipcode}
            </UserInfo>
            <Divider />
            <h3>Company</h3>
            <UserInfo>{props.user && props.user.company.name}</UserInfo>
            <UserInfo>{props.user && props.user.company.catchPhrase}</UserInfo>
          </Space>
        </TabPane>
        <TabPane tab="EXPENSE" key="2">
          <h3>Welcome {props.user && props.user.name}</h3>
          <Divider />
          <p>You can see Expense Reports here</p>
        </TabPane>
      </Tabs>
    </>
  );
};

export default Dashboard;
