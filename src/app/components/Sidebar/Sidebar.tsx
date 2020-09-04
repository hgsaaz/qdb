import React from 'react';
import { Avatar, Row, Col, Space, Divider, Menu } from 'antd';
import { SiderWrapper, CenterCol, UserInfo, WelcomeText } from './styles';
import { Link } from 'react-router-dom';
import { GithubOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { selectUser } from 'app/Layouts/PageLayout/selectors';
import MenuItems from './helper/menudata';

function Sidebar() {
  const user = useSelector(selectUser);
  return (
    <SiderWrapper>
      <Row gutter={[16, 16]} justify="center">
        <CenterCol span={24}>
          <Avatar size={90} icon={<GithubOutlined />} />
          <Space size="small" direction="vertical">
            <WelcomeText>Hello</WelcomeText>
            <UserInfo>{user && user.name}</UserInfo>
          </Space>
          <Divider />
        </CenterCol>
        <Col span={24}>
          <Menu defaultSelectedKeys={['OVERVIEW']} mode="inline">
            {MenuItems.map(menugroup => {
              return (
                <Menu.ItemGroup key={menugroup.key} title={menugroup.title}>
                  {menugroup.items.map(menuitem => {
                    return (
                      <Menu.Item key={menuitem.Key}>
                        <Link to={menuitem.path}>{menuitem.label}</Link>
                      </Menu.Item>
                    );
                  })}
                </Menu.ItemGroup>
              );
            })}
          </Menu>
        </Col>
      </Row>
    </SiderWrapper>
  );
}

export default Sidebar;
