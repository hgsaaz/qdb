import { DASHBOARD, REPORTS } from 'app/routes/constants';

export default [
  {
    title: 'Dashboard',
    key: 'dashboard',
    items: [
      {
        path: DASHBOARD,
        label: 'Overview',
        Key: 'OVERVIEW',
      },
    ],
  },
  {
    title: 'Reports',
    key: 'reports',
    items: [
      {
        path: REPORTS,
        label: 'Active Reports',
        Key: 'REPORTS',
      },
    ],
  },
];
