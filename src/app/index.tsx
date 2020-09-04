/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.less';
import { Layout, Spin } from 'antd';

import { GlobalStyle } from '../styles/global-styles';

import PageLayout from './Layouts/PageLayout';
import Sidebar from './components/Sidebar/Sidebar';
import Routes from 'app/routes/Routes';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { actions, reducer, sliceKey } from 'app/Layouts/PageLayout/slice';
import { userSaga } from 'app/Layouts/PageLayout/saga';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading } from 'app/Layouts/PageLayout/selectors';

export function App() {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: userSaga });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.loadUser('1'));
    return () => {};
  });

  const loading = useSelector(selectLoading);

  return (
    <Spin spinning={loading}>
      <BrowserRouter>
        <Helmet titleTemplate="QDB" defaultTitle="QDB">
          <meta name="description" content="QDB application" />
        </Helmet>
        <Layout>
          <Sidebar />
          <PageLayout>
            <Routes />
          </PageLayout>
        </Layout>
        <GlobalStyle />
      </BrowserRouter>
    </Spin>
  );
}
