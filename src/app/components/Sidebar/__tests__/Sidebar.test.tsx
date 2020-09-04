import React from 'react';
import { Store } from '@reduxjs/toolkit';
import { actions, reducer } from 'app/Layouts/PageLayout/slice';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Sidebar from '../Sidebar';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { UserInfo } from 'app/Layouts/PageLayout/types';
import { createStore } from 'redux';
const history = createMemoryHistory();
const store = createStore(reducer);

const renderSidebar = (store: Store) =>
  render(
    <Provider store={store}>
      <Router history={history}>
        <Sidebar />
      </Router>
    </Provider>,
  );

const user = { name: 'test', email: 'test@gmail.com' };

describe('<Sidebar />', () => {
  let component: ReturnType<typeof renderSidebar>;
  beforeAll(() => {
    // mocking matchMedia
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  beforeEach(() => {
    store.dispatch(actions.saveUser(user as UserInfo));
    component = renderSidebar(store);
    expect(store.getState().user).toEqual(user);
  });

  afterEach(() => {
    component.unmount();
  });

  it('should match the snapshot', () => {
    expect(component.container.firstChild).toMatchSnapshot();
  });

  it('should have props displayed', () => {
    store.dispatch(actions.loadUser('1'));
    component = renderSidebar(store);
    expect(store.getState().username).toEqual('1');
    expect(component.container.querySelector('h3')).toMatchSnapshot();
  });
});
