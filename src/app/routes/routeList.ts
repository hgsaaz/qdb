import * as Routes from './constants';
import { RoutesList } from './types';

const RoutesListItems: Array<RoutesList> = [
  {
    path: Routes.DASHBOARD,
    component: 'Dashboard',
    type: 'dashboard',
  },
  {
    path: Routes.REPORTS,
    component: 'Reports',
    type: 'reports',
  },
];

export default RoutesListItems;
