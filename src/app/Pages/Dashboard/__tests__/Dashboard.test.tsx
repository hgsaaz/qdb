import React from 'react';
import { render, act } from '@testing-library/react';
import Dashboard from '../Dashboard';

const renderDashboard = (props: Parameters<typeof Dashboard>[number] = {}) =>
  render(<Dashboard {...props} />);
const email = 'test@test.com';
const name = 'test';
const testuser = {
  name: name,
  email: email,
};

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
