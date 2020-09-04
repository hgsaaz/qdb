import React from 'react';
import { Avatar, Row, Col, Button, Space, Divider } from 'antd';
import 'antd/dist/antd.less';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { ThunderboltOutlined } from '@ant-design/icons';
import { SiderWrapper, CenterCol, UserInfo, WelcomeText } from './styles';

const Sidebar = props => {
  return (
    <SiderWrapper>
      <Row gutter={[16, 16]} justify="center">
        <CenterCol span={24}>
          <Avatar
            size={90}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />

          <Space size="small" direction="vertical">
            <WelcomeText>Hello</WelcomeText>
            <UserInfo>{props.user && props.user.name}</UserInfo>
            <Button type="primary" icon={<ThunderboltOutlined />}>
              Live Metrices
            </Button>
          </Space>
          <Divider />
        </CenterCol>
        <Col span={24}>
          <Menu defaultSelectedKeys={['1']} mode="inline">
            <Menu.ItemGroup key="g1" title="Dashboard">
              <Menu.Item key="1">
                <Link
                  to={{
                    pathname: '/',
                    state: '1',
                  }}
                >
                  Overview
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link
                  to={{
                    pathname: '/',
                    state: '2',
                  }}
                >
                  Expense
                </Link>
              </Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key="g2" title="Reports">
              <Menu.Item key="3">
                <Link
                  to={{
                    pathname: '/reports',
                    state: '3',
                  }}
                >
                  Active Reports
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link
                  to={{
                    pathname: '/reports',
                    state: '4',
                  }}
                >
                  Calender
                </Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link
                  to={{
                    pathname: '/reports',
                    state: '5',
                  }}
                >
                  Live Stats
                </Link>
              </Menu.Item>
            </Menu.ItemGroup>
          </Menu>
        </Col>
      </Row>
    </SiderWrapper>
  );
};

export default Sidebar;
