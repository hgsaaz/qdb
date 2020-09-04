import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { App } from '../index';
import { HelmetProvider } from 'react-helmet-async';
import { Store } from '@reduxjs/toolkit';
import { configureAppStore } from 'store/configureStore';
import { ThemeProvider } from 'styles/theme/ThemeProvider';
const store = configureAppStore();

const renderAppPage = (store: Store) =>
  render(
    <Provider store={store}>
      <ThemeProvider>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </ThemeProvider>
    </Provider>,
  );

describe('<App />', () => {
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

  let component: ReturnType<typeof renderAppPage>;
  beforeEach(() => {
    component = renderAppPage(store);
    expect(store.getState().user.username).toEqual('1');
  });

  afterEach(() => {
    component.unmount();
  });

  it('should render and match the snapshot', () => {
    expect(component.container.firstChild).toMatchSnapshot();
  });
});
