import { Layout, Col } from 'antd';
import styled from 'styled-components/macro';
const { Sider } = Layout;

export const SiderWrapper = styled(Sider)`
  padding: 30px;
`;

export const CenterCol = styled(Col)`
  text-align: center;
`;

export const UserInfo = styled.p`
  padding: 0;
  margin: 0;
  padding-bottom: 10px;
  font-weight: bold;
`;

export const WelcomeText = styled.p`
  padding: 0;
  margin: 0;
  padding-top: 10pt;
`;
