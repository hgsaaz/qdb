import React from 'react';
import { Tabs, Space, Divider } from 'antd';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { UserInfo } from './styles';
import { useSelector } from 'react-redux';
import { selectUser } from 'app/Layouts/PageLayout/selectors';
import {
  userAddressMDT,
  userCompanyMDT,
  userDetailsMDT,
} from './helper/userMetadata';

const { TabPane } = Tabs;

function Dashboard() {
  const user = useSelector(selectUser);
  const { address, company } = user || { address: null, company: null };

  return (
    <>
      <HelmetProvider>
        <Helmet titleTemplate="QDB Dashboard" defaultTitle="QDB Dashboard">
          <meta name="description" content="QDB application" />
        </Helmet>
      </HelmetProvider>
      <h1>Dashboard</h1>
      <Tabs defaultActiveKey="1">
        <TabPane tab="OVERVIEW" key="1">
          <Space size="small" direction="vertical">
            <h3>Personal Details</h3>
            {user &&
              userDetailsMDT.map(mdt => {
                return (
                  <UserInfo key={mdt.key}>
                    {mdt.label}: {user[mdt.key]}
                  </UserInfo>
                );
              })}
            {address && (
              <>
                <Divider />
                <h3>Address</h3>
                {userAddressMDT.map(mdt => {
                  return (
                    <UserInfo key={mdt.key}>
                      {mdt.label}: {address[mdt.key]}
                    </UserInfo>
                  );
                })}
              </>
            )}
            {company && (
              <>
                <Divider />
                <h3>Company</h3>
                {userCompanyMDT.map(mdt => {
                  return (
                    <UserInfo key={mdt.key}>
                      {mdt.label}: {company[mdt.key]}
                    </UserInfo>
                  );
                })}
              </>
            )}
          </Space>
        </TabPane>
      </Tabs>
    </>
  );
}

export default Dashboard;
