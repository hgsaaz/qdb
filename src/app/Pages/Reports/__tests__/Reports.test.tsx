import React from 'react';
import { render, act } from '@testing-library/react';
import Reports from '../Reports';

import { Store } from '@reduxjs/toolkit';
import { actions, reducer } from 'app/Layouts/PageLayout/slice';
import { Provider } from 'react-redux';
import { UserInfo } from 'app/Layouts/PageLayout/types';
import { createStore } from 'redux';
const store = createStore(reducer);

const renderReports = (store: Store) =>
  render(
    <Provider store={store}>
      <Reports />
    </Provider>,
  );

const user = { name: 'test', email: 'test@gmail.com' };

describe('<Reports />', () => {
  let component: ReturnType<typeof renderReports>;
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
    component = renderReports(store);
    expect(store.getState().user).toEqual(user);
  });

  it('should match the snapshot', () => {
    expect(component.container.firstChild).toMatchSnapshot();
  });

  it('should have props displayed', () => {
    const { container } = component;
    expect(container.querySelector('h3')).toMatchSnapshot();
  });
});
