/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from '../styles/global-styles';

import PageLayout from './Pages/PageLayout';

export function App() {
  return (
    <BrowserRouter>
      <Helmet titleTemplate="QDB" defaultTitle="QDB">
        <meta name="description" content="QDB application" />
      </Helmet>
      <PageLayout />
      <GlobalStyle />
    </BrowserRouter>
  );
}
