import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '../Dashboard';

import { Store } from '@reduxjs/toolkit';
import { actions, reducer } from 'app/Layouts/PageLayout/slice';
import { Provider } from 'react-redux';
import { UserInfo } from 'app/Layouts/PageLayout/types';
import { createStore } from 'redux';
const store = createStore(reducer);

const renderDashboard = (store: Store) =>
  render(
    <Provider store={store}>
      <Dashboard />
    </Provider>,
  );

const user = { name: 'test', email: 'test@gmail.com' };

describe('<Dashboard />', () => {
  let component: ReturnType<typeof renderDashboard>;
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
    component = renderDashboard(store);
    expect(store.getState().user).toEqual(user);
  });

  it('should match the snapshot', () => {
    expect(component.container.firstChild).toMatchSnapshot();
  });

  it('should have displayed props', () => {
    const { container } = component;
    expect(container.querySelector('h3')).toMatchSnapshot();
  });
});
