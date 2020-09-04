import React from 'react';

import LayoutContainer from 'app/containers/LayoutContainer/LayoutContainer';

const PageLayout = props => {
  return <LayoutContainer>{props.children}</LayoutContainer>;
};

export default PageLayout;
