import React from 'react';
import { render, act } from '@testing-library/react';
import Reports from '../Reports';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from 'app/Pages/PageLayout/slice';

const renderReports = initialState =>
  render(
    <Provider store={createStore(reducer, initialState)}>
      <Reports />
    </Provider>,
  );

const name = 'testUser';
const testuser = {
  name: name,
};

describe('<Reports />', () => {
  it('should match the snapshot', () => {
    act(() => {
      const { container } = renderReports({
        user: testuser,
      });
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  it('should have props displayed', () => {
    act(() => {
      const { container } = renderReports({
        user: testuser,
      });
      expect(container.querySelector('h3')).toMatchSnapshot();
    });
  });
});
