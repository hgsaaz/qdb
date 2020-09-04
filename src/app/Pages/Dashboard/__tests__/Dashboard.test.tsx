import React from 'react';
import { render, act } from '@testing-library/react';
import Dashboard from '../Dashboard';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from 'app/Layouts/PageLayout/slice';

const email = 'test@test.com';
const name = 'test';
const testuser = {
  name: name,
  email: email,
};

const renderDashboard = initialState =>
  render(
    <Provider store={createStore(reducer, initialState)}>
      <Dashboard />
    </Provider>,
  );

describe('<Dashboard />', () => {
  it('should match the snapshot', () => {
    act(() => {
      const { container } = renderDashboard({
        user: testuser,
      });
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  it('should have displayed props', () => {
    act(() => {
      const { container } = renderDashboard({
        user: testuser,
      });
      expect(container.querySelector('h3')).toMatchSnapshot();
    });
  });
});
