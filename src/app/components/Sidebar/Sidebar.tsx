import React from 'react';
import { Avatar, Row, Col, Button, Space, Divider } from 'antd';
import 'antd/dist/antd.less';
import { Menu } from 'antd';
import { ThunderboltOutlined } from '@ant-design/icons';
import { SiderWrapper, CenterCol, UserInfo, WelcomeText } from './styles';
import { useHistory } from 'react-router-dom';

function Sidebar(props) {
  let histroy = useHistory();
  const handleClick = item => {
    let path = '/';
    if (item.key > 2) {
      path = '/reports';
    } else {
      path = '/';
    }

    if (histroy.location.pathname !== path) {
      histroy.push(path);
    }
  };

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
          <Menu defaultSelectedKeys={['1']} mode="inline" onClick={handleClick}>
            <Menu.ItemGroup key="g1" title="Dashboard">
              <Menu.Item key="1">Overview</Menu.Item>
              <Menu.Item key="2">Expense</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key="g2" title="Reports">
              <Menu.Item key="3">Active Reports</Menu.Item>
              <Menu.Item key="4">Calender</Menu.Item>
              <Menu.Item key="5">Live Stats</Menu.Item>
            </Menu.ItemGroup>
          </Menu>
        </Col>
      </Row>
    </SiderWrapper>
  );
}

export default Sidebar;
