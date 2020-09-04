import React from 'react';
import { Router } from 'react-router-dom';
import { render, act } from '@testing-library/react';
import Sidebar from '../Sidebar';
import { createMemoryHistory } from 'history';
const history = createMemoryHistory();
const renderSidebar = (props: Parameters<typeof Sidebar>[number] = {}) =>
  render(
    <Router history={history}>
      <Sidebar {...props} />
    </Router>,
  );
const name = 'testUser';
const testuser = {
  name: name,
};

describe('<Sidebar />', () => {
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

  it('should match the snapshot', () => {
    const { container } = renderSidebar({
      user: testuser,
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should have props displayed', () => {
    act(() => {
      const { queryByText } = renderSidebar({
        user: testuser,
      });
      expect(queryByText(name)).toBeInTheDocument();
    });
  });
});
