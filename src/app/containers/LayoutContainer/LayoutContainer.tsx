import React from 'react';
import { PageWrapper } from './styles';

const LayoutContainer = props => {
  return <PageWrapper>{props.children}</PageWrapper>;
};

export default LayoutContainer;
