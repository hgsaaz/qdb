import React, { useEffect } from 'react';
import 'antd/dist/antd.less';
import LayoutContainer from 'app/containers/LayoutContainer/LayoutContainer';
import { Switch, Route, withRouter } from 'react-router-dom';
import { NotFoundPage } from 'app/containers/NotFoundPage/Loadable';
import { PageHeader, Layout, Spin } from 'antd';
import Sidebar from 'app/components/Sidebar/Sidebar';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { actions, reducer, sliceKey } from './slice';
import { userSaga } from './saga';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, selectLoading } from './selectors';
import RoutesListItems from 'app/routes/routeList';
import { LoadContainer } from 'utils/loadable';

const PageLayout = () => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: userSaga });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.loadUser('1'));
    return () => {};
  });

  const user = useSelector(selectUser);
  const loading = useSelector(selectLoading);
  return (
    <Spin size="large" spinning={loading}>
      <PageHeader
        className="site-page-header"
        title="QDB"
        subTitle="Welcome to QDB"
      />
      <Layout>
        <Sidebar user={user} />
        <Switch>
          {RoutesListItems.map(route => {
            const ContainerComponent = LoadContainer(route.component);
            return (
              <Route
                exact
                path={process.env.PUBLIC_URL + route.path}
                key={route.type}
              >
                <LayoutContainer>
                  <ContainerComponent user={user} />
                </LayoutContainer>
              </Route>
            );
          })}
          <Route component={NotFoundPage} />
        </Switch>
      </Layout>
    </Spin>
  );
};

export default withRouter(PageLayout);
