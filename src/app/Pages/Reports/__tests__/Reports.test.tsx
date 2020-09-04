import React from 'react';
import { render, act } from '@testing-library/react';
import Reports from '../Reports';

const renderReports = (props: Parameters<typeof Reports>[number] = {}) =>
  render(<Reports {...props} />);
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
